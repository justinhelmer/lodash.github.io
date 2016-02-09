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
        result.catch(function(err) {
          expect(err.message).to.eq('ERROR');
          expect(result.isFulfilled()).to.be.false();
          done();
        });

        callbacks.error(new Error('ERROR'));
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
          'node_modules/support-for/sass/_support-for.scss'
        ]);
      });

      it('should pipe the vendor assets to the destination directory', function() {
        expect(gulp.dest).to.have.been.calledWithExactly(path.resolve('source') + '/css');
        expect(pipe).to.have.been.calledWithExactly('DEST');
      });
    });

    function stubGulp() {
      pipe = sinon.spy();

      sandbox.stub(gulp, 'dest').returns('DEST');
      sandbox.stub(gulp, 'on', callback);
      sandbox.stub(gulp, 'src', src);
      sandbox.stub(gulp, 'start');
      sandbox.stub(gulp, 'task', callback);

      // Since gulp.task is called when module is loaded, wipe the cache to ensure its reloaded
      delete require.cache[require.resolve('../lib/build')];

      function callback(trigger, cb) {
        callbacks[trigger] = cb;
      }

      function src(files) {
        return {
          pipe: pipe
        }
      }
    }
  });
})();
