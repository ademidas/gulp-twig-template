var gulp = require('gulp');
var twig = require('gulp-twig');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
//var serve = require('gulp-serve');

gulp.task('default', 
	['templates', 'sass', 'serve', 'watch']
 );

// Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src('src/*.html') // run the Twig template parser on all .html files in the "src" directory
        .pipe(twig())
        .pipe(gulp.dest('dist')); // output the rendered HTML files to the "dist" directory
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/*.html', ['templates']);
});

gulp.task('serve', function() {
  gulp.src('dist')
    .pipe(webserver({
      port:'9090',
      livereload: true,
      open: true
    }));
});
