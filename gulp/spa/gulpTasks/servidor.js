const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos() {
    return gulp.src('build')
         .pipe(webserver({
             port: 8080,
             open: true,
             livereload: true
         }))
}   

function servidor(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appsCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}