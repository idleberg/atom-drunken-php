// Requirements
var gulp     = require('gulp');
var recess   = require('gulp-recess');
var jsonlint = require('gulp-json-lint');
var coffeelint = require('gulp-coffeelint');

// Exclude node_modules
var self = '!node_modules/**/*';

// Tasks
gulp.task('lint', ['coffeelint', 'jsonlint', 'less']);

// Lint CSON files
gulp.task('coffeelint', function () {
    gulp.src(['./**/*.cson', self])
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

// Lint JSON files
gulp.task('jsonlint', function() {
   gulp.src(['./**/*.json', self])
      .pipe(jsonlint())
      .pipe(jsonlint.report('verbose'));
});

// Lint LESS files
gulp.task('less', function () {
     gulp.src('index.less')
        .pipe(recess({"noOverqualifying": false} ))
        .pipe(recess.reporter());
});