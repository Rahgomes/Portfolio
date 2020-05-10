const gulp = require('gulp'),
      imagemin = require('gulp-imagemin')

function images() {

    return gulp.src('src/assets/img/**/*.*')
                .pipe(imagemin({
                    progressive: true,
                    svgoPlugins: [
                        {removeViewBox: false},
                        {cleanupIDs: false}
                    ]
                }))
                .pipe(gulp.dest('dist/assets/img/'))
}

gulp.task('images', images)

module.exports = images