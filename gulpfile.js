var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var serve = require('gulp-serve');
var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('default', ['webserver', 'scripts', 'styles'], function() {
    gulp.watch('js/*/*.js', ['scripts']);
    gulp.watch('sass/*/*.scss', ['styles']);

});

gulp.task('scripts', function() {
    gulp.src('js/**/*.js')
    .pipe(babel())
       .pipe(gulp.dest('dist/js'))
   });

gulp.task('styles', function() {
 gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});