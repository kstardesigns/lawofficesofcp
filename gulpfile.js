var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

var paths = {
    sass: ['./css/*.scss']
};

function onError(err) {
    console.log(err);
}

var compileSass = function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(prefix('last 5 versions'))
        .pipe(minify())
        .pipe(gulp.dest('css/'))
        .pipe(plumber({
            errorHandler: onError
        }))
}

gulp.task('sass', compileSass);

gulp.task('watch', function () {
    gulp.watch(paths.sass, gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));