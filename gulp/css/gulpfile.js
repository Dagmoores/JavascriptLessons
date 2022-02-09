const { series, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCss() {

    return gulp.src('src/sass/index.scss')
        .pipe(sass().once('error', sass.logError))
        .pipe(uglifyCss({
            "uglifycomments": true,
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))    
}

function copiarHtML () {
    return gulp.src('src/**/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCss, copiarHtML)