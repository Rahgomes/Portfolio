const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function styles() {

    return gulp.src('src/assets/scss/module/hero.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(gulp.dest('dist/assets/css/module/'))
}

function stylesBootstrap() {

    return gulp.src('src/assets/scss/base/bootstrap/bootstrap.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('bootstrap.min.css'))
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(gulp.dest('dist/assets/css/base/'))
}

function stylesFontAwesome() {

    return gulp.src('src/assets/scss/base/fontawesome/fontawesome.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('fontawesome.min.css'))
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(gulp.dest('dist/assets/css/base/'))
}

gulp.task('styles', styles)
gulp.task('stylesBootstrap', stylesBootstrap)
gulp.task('stylesFontAwesome', stylesFontAwesome)

module.exports = {
    styles,
    stylesBootstrap,
    stylesFontAwesome
}