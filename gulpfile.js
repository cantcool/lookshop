'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var wait = require('gulp-wait');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(wait(300))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(wait(300))
    .pipe(browserSync.reload({
      stream: true
    }))
});
 
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('./sass/**/*.scss', ['sass']); 
})