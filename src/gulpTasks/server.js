const gulp = require('gulp')
const browserSync = require('browser-sync')

function server() {

    browserSync.init({

		server: {
			baseDir: 'src'
		}
    });
    
    gulp.watch('src/**/*.*').on('change', browserSync.reload)
}

gulp.task('server', server)

module.exports = server