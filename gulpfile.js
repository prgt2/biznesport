var gulp = require('gulp')
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin')

gulp.task('styles', function () {
    return gulp.src('./css/*.css')
      .pipe(csso())
      .pipe(gulp.dest('./dist/css'))
  });

  gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
  });
  gulp.task('pages', function() {
    return gulp.src(['./**/*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./dist'));
  });