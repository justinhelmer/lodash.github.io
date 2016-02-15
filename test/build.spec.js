(function() {
  'use strict';

  var chai = require('chai');
  var expect = chai.expect;
  var gulp = require('gulp');
  var path = require('path');
  var sinon = require('sinon');
  var callbacks;
  var sandbox;

  chai.use(require('dirty-chai'));
  chai.use(require('sinon-chai'));

  describe('lib/build.js', function() {
    var build;
    var pipe;

    beforeEach(function() {
      callbacks = {};
      sandbox = sinon.sandbox.create();
      stubGulp();
      build = require('../lib/build');
    });

    afterEach(function() {
      sandbox.restore();
    });

    it('should attach a copyCSS gulp task', function() {
      expect(gulp.task).to.have.been.calledWithMatch('copyCSS');
    });

    describe('#build', function() {
      var result;

      beforeEach(function() {
        result = build();
      });

      it('should attach an event that is triggered when the gulp task succeeds', function() {
        expect(gulp.on).to.have.been.calledWithMatch('stop');
      });

      it('should attach an event that is triggered when the gulp task fails', function() {
        expect(gulp.on).to.have.been.calledWithMatch('error');
      });

      it('should start the copyCSS gulp task', function() {
        expect(gulp.start).to.have.been.calledWithExactly('copyCSS');
      });

      it('should resolve with undefined as the fulfillment value when the success event is triggered', function() {
        callbacks.stop();
        expect(result.isFulfilled()).to.be.true();
        expect(result.value()).to.be.undefined();
      });

      it('should reject with the gulp error as the rejection value when the error event is triggered', function(done) {
        result.catch(expectError).done();
        callbacks.error(new Error('ERROR'));

        /**
         * Validate that an error was thrown and that the promise was not fulfilled.
         *
         * @name expectError
         * @param {Error} err - The error object (thrown by attempting to run the gulp task).
         */
        function expectError(err) {
          expect(err.message).to.eq('ERROR');
          expect(result.isFulfilled()).to.be.false();
          done();
        }
      });
    });

    describe('#copyCSS', function() {
      beforeEach(function() {
        sandbox.spy(path, 'resolve');
        callbacks.copyCSS();
      });

      it('should resolve the source path relative to the current working directory', function() {
        expect(path.resolve).to.have.been.calledWithExactly('source');
      });

      it('should create a vinyl wrapper for all vendor assets', function() {
        expect(gulp.src).to.have.been.calledWithExactly([
          'node_modules/normalize-scss/sass/**',
          'node_modules/normalize-scss/node_modules/support-for/sass/_support-for.scss'
        ]);
      });

      it('should pipe the vendor assets to the destination directory', function() {
        expect(gulp.dest).to.have.been.calledWithExactly(path.resolve('source') + '/css');
        expect(pipe).to.have.been.calledWithExactly('DEST');
      });
    });

    /**
     * Stub all gulp methods used by build.js. Additionally delete the build.js module from require cache to force it to be reloaded
     * on the next require() call.
     *
     * @name stubGulp
     */
    function stubGulp() {
      pipe = sinon.spy();

      sandbox.stub(gulp, 'dest').returns('DEST');
      sandbox.stub(gulp, 'on', callback);
      sandbox.stub(gulp, 'src', src);
      sandbox.stub(gulp, 'start');
      sandbox.stub(gulp, 'task', callback);

      // Since gulp.task is called when module is loaded, wipe the cache to ensure its reloaded
      delete require.cache[require.resolve('../lib/build')];

      /**
       * Store a callback in memory for use later. Useful for registering a stub call, then executing the callback pased as an argument.
       *
       * @name callback
       * @param {string} trigger - The trigger name. Typically the first param of the function; i.e. gulp.on(trigger, cb), gulp.task(trigger, cb).
       * @param {function} cb - The callback to register for execution later. Gets stored in memory under callbacks[trigger].
       */
      function callback(trigger, cb) {
        callbacks[trigger] = cb;
      }

      /**
       * Mocked version of gulp.src() specifically for use in testing build.js.
       *
       * @name src
       * @return {object} - Contains a single property 'pipe', which is a sinon spy scoped within the common closure of the build.js test suite.
       */
      function src() {
        return {
          pipe: pipe
        };
      }
    }
  });
})();
