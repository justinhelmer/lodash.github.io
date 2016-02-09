(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var Promise = require('bluebird');

  gulp.task('copyCSS', copyCSS);

  /**
   * Lodash-specific build tasks that are run before github release manager's build routine.
   *
   * @name build
   * @return {bluebird Promise} - Resolves on success, rejects with the error from the gulp task.
   */
  function build() {
    return new Promise(function(resolve, reject) {
      gulp.on('stop', function() {
        resolve();
      });

      gulp.on('error', function(err) {
        reject(err);
      });

      gulp.start('copyCSS');
    });
  }

  function copyCSS() {
    var srcPath = path.resolve('source');

    var files = [
      'node_modules/normalize-scss/sass/**',
      'node_modules/support-for/sass/_support-for.scss'
    ];

    return gulp.src(files).pipe(gulp.dest(srcPath + '/css'));
  }

  module.exports = build;
})();
