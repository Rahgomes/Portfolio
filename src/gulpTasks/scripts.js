const gulp = require('gulp')
const { series, parallel } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

function scripts() {

    return gulp.src('src/assets/js/module/hero.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist/assets/js/module/'))
}

function scriptsjQuery() {

    return gulp.src('src/assets/js/base/jquery.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist/assets/js/base/'))
}

function scriptsBootstrap() {

    return gulp.src('src/assets/js/base/bootstrap.js')
                .pipe(uglify())
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