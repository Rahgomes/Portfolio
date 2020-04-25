const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps')

function watchSass() {

  return gulp.src('src/assets/scss/**/*.scss')
              .pipe(sourcemaps.init())
              .pipe(sass().on('error', sass.logError))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('src/assets/css/'))
              .pipe(browserSync.stream())
}

function server() {

    browserSync.init({

		server: {
			baseDir: 'src'
		}
    });
    
    gulp.watch('src/assets/scss/**/*.scss', watchSass)
    gulp.watch('src/**/*.html').on('change', browserSync.reload)
    gulp.watch('src/assets/js/**/*.js').on('change', browserSync.reload)
  }
  
gulp.task('watchSass', watchSass)
gulp.task('server', server)

module.exports = {
  server,
  watchSass
}