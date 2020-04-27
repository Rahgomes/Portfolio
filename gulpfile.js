const gulp = require('gulp'),
      { series, parallel } = require('gulp')

const {pages,cleanDist} = require('./src/gulpTasks/pages')
const { styles, stylesLayout, stylesBootstrap } = require('./src/gulpTasks/styles')
const { scripts, scriptsjQuery, scriptsBootstrap } = require('./src/gulpTasks/scripts')
const images = require('./src/gulpTasks/images')
const { server, watchSass } = require('./src/gulpTasks/server')

module.exports.default = series(
        series(cleanDist),
        parallel(
            series(pages, styles, stylesLayout, stylesBootstrap),
            series(scriptsjQuery, scriptsBootstrap, scripts),
            series(images)
            ),
        series(watchSass, server)
    )