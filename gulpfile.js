(function() {
  'use strict';

  var gulp = require('gulp');
  var fork = require('./lib/fork');
  var jscs = require('gulp-jscs');
  var notify = require('gulp-notify');
  var buildPath = '_site';

  gulp.task('build', ['lintStyle', 'copySCSS']);
  gulp.task('lintStyle', lintStyle);
  gulp.task('copySCSS', ['lintStyle'], copySCSS);

  function copySCSS() {
    var files = ['node_modules/normalize.css/normalize.css'];
    gulp.src(files).pipe(gulp.dest(buildPath + '/css'));
  }

  function lintStyle() {
    var files = ['bin/*.js', 'lib/*.js', 'gulpfile.js'];

    return gulp
        .src(files)
        .pipe(jscs())
        .pipe(require('gulp-jscs-stylish')())
        .pipe(jscs.reporter('fail'));

  }
})();
