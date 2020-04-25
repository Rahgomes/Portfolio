const gulp = require('gulp')
const {series, parallel} = require('gulp')

const pages = require('./src/gulpTasks/pages')
const { styles, stylesBootstrap, stylesFontAwesome, stylesCompilaSass } = require('./src/gulpTasks/styles')
const { scripts, scriptsjQuery, scriptsBootstrap } = require('./src/gulpTasks/scripts')
const images = require('./src/gulpTasks/images')
const server = require('./src/gulpTasks/server')

module.exports.default = series(
        parallel(
            series(pages, styles, stylesBootstrap, stylesFontAwesome, stylesCompilaSass),
            series(scriptsjQuery, scriptsBootstrap, scripts),
            series(images)
            ),
        series(server)
    )