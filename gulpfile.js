// Include gulp
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);