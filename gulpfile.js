var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');
var deploy = require('gulp-gh-pages');

 
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

gulp.task('default', ['webserver', 'scripts', 'styles', 'copy-html'], function() {
    gulp.watch('js/*/*.js', ['scripts']);
    gulp.watch('sass/*/*.scss', ['styles']);
    gulp.watch('index.html', ['copy-hmtl']);
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

gulp.task('copy-html', function () {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
      .pipe(deploy())
  });