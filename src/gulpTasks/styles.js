const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      uglifyCss = require('gulp-uglifycss'),
      sourcemaps = require('gulp-sourcemaps')

function styles() {

    return gulp.src('src/assets/scss/module/hero.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('dist/assets/css/module/'))
}

function stylesBootstrap() {

    return gulp.src('src/assets/scss/base/bootstrap/bootstrap.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('dist/assets/css/base/'))
}

function stylesFontAwesome() {

    return gulp.src('src/assets/scss/base/fontawesome/fontawesome.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(sourcemaps.write('./'))
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