const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      uglifyCss = require('gulp-uglifycss'),
      sourcemaps = require('gulp-sourcemaps')

function stylesModuleIndex() {

    return gulp.src('src/assets/scss/module/module-index.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('dist/assets/css/module/'))
}

function stylesLayoutPages() {

    return gulp.src('src/assets/scss/layout/layout-pages.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('dist/assets/css/layout/'))
}

function stylesBootstrap() {

    return gulp.src('src/assets/scss/base/bootstrap/bootstrap.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(uglifyCss({"maxLineLen": 80,"uglyComments": true}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('dist/assets/css/base/'))
}

gulp.task('stylesModuleIndex', stylesModuleIndex)
gulp.task('stylesLayoutPages', stylesLayoutPages)
gulp.task('stylesBootstrap', stylesBootstrap)

module.exports = {
    stylesModuleIndex,
    stylesLayoutPages,
    stylesBootstrap
}