'use strict';

let gulp = require('gulp'),
  concat = require('gulp-concat');

(function() {

  gulp.task('concat-specs', function() {
    gulp.src('../specs/*/*.spec.js')
      .pipe(concat('all.spec.js'))
      .pipe(gulp.dest('../specs'));
  });

}());