const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log("Tarefa 1")
    return cb()
}

const antes2 = cb => {
    console.log("Tarefa 2")
    return cb()
}

const fim = cb => {
    console.log("Tarefa fim")
    return cb()
}


function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim,
)