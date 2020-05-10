const gulp = require('gulp'),
      htmlmin = require('gulp-htmlmin'),
      clean = require('gulp-clean'),
      usemin = require('gulp-usemin'),
      inlineSource = require('gulp-inline-source')

function cleanDist() {

    return gulp.src('dist', { allowEmpty: true })
                .pipe(clean())
}

function pageIndex() {

    return gulp.src('src/index.html')
                .pipe(inlineSource())
                .pipe(usemin({
                    html: [ htmlmin({ collapseWhitespace: true }) ]
                }))
                .pipe(gulp.dest('dist'))
}

function pageProjetos() {

    return gulp.src('src/projetos.html')
                .pipe(inlineSource())
                .pipe(usemin({
                    html: [ htmlmin({ collapseWhitespace: true }) ]
                }))
                .pipe(gulp.dest('dist'))
}

function pageContato() {

    return gulp.src('src/contato.html')
                .pipe(inlineSource())
                .pipe(usemin({
                    html: [ htmlmin({ collapseWhitespace: true }) ]
                }))
                .pipe(gulp.dest('dist'))
}

gulp.task('pageIndex', pageIndex)
gulp.task('pageProjetos', pageProjetos)
gulp.task('pageContato', pageContato)
gulp.task('cleanDist', cleanDist)

module.exports = {
    pageIndex,
    pageProjetos,
    pageContato,
    cleanDist
}