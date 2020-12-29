const gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    uglifyJs = require('gulp-uglifyjs'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps')

function scripts() {

    return gulp.src('src/assets/js/module/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/assets/js/module/'))
}

function scriptsjQuery() {

    return gulp.src('src/assets/js/base/jquery.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/assets/js/base/'))
}

function scriptsBootstrap() {

    return gulp.src('src/assets/js/base/bootstrap.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/assets/js/base/'))
}

gulp.task('scriptsjQuery', scriptsjQuery)
gulp.task('scriptsBootstrap', scriptsBootstrap)
gulp.task('scripts', scripts)

module.exports = {
    scriptsjQuery,
    scriptsBootstrap,
    scripts
}