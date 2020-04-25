const gulp = require('gulp'),
      imagemin = require('gulp-imagemin')

function images() {

    return gulp.src('src/assets/img/**/*.*')
                .pipe(imagemin())
                .pipe(gulp.dest('dist/assets/img/'))
}

gulp.task('images', images)

module.exports = images