const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

function pages() {

    return gulp.src('src/**/*.html')
                .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
                .pipe(gulp.dest('dist'))
                // .pipe(gulp.dest('./'))
}

gulp.task('pages', pages)

module.exports = pages