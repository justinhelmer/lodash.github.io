(function() {
  'use strict';

  var gulp = require('gulp');
  var fork = require('./lib/fork');
  var buildPath = '_site';

  gulp.task('build', build);
  gulp.task('copySCSS', copySCSS);

  function build() {
    return copySCSS();
  }

  /**
   * Seemingly strange, but Jekyll is handling the CSS preprocessing and thus, needs additional CSS in the source.
   */
  function copySCSS() {
    var files = [
      'node_modules/normalize.css/normalize.css'
    ];

    return gulp.src(files).pipe(gulp.dest(buildPath + '/css'));
  }
})();
