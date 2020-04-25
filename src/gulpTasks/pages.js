const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const clean = require('gulp-clean')
const usemin = require('gulp-usemin')

function cleanDist() {

    return gulp.src('dist', {allowEmpty: true})
                .pipe(clean())
}

function pages() {

    return gulp.src('src/**/*.html')
                .pipe(htmlmin({collapseWhitespace: true}))
                .pipe(usemin())
                .pipe(gulp.dest('dist'))
}

gulp.task('pages', pages)
gulp.task('cleanDist', cleanDist)

module.exports = {
    pages,
    cleanDist
}