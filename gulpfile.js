const gulp = require('gulp'),
      { series, parallel } = require('gulp')

const { pageIndex, pageProjetos, pageContato, cleanDist } = require('./src/gulpTasks/pages')
const { stylesModuleIndex, stylesModuleProjetos, stylesModuleContato, stylesLayoutPages, stylesBootstrap, stylesFonts } = require('./src/gulpTasks/styles')
const { scripts, scriptsjQuery, scriptsBootstrap } = require('./src/gulpTasks/scripts')
const images = require('./src/gulpTasks/images')
const { server, watchSass } = require('./src/gulpTasks/server')

module.exports.default = series(
        series(cleanDist),
        parallel(
            series(pageIndex, pageProjetos, pageContato, stylesModuleIndex, stylesModuleProjetos, stylesModuleContato, stylesLayoutPages, stylesBootstrap, stylesFonts),
            series(scriptsjQuery, scriptsBootstrap, scripts),
            series(images)
            ),
        series(watchSass, server)
    )