/**
 * @Description : images.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const rev = require('gulp-rev');
const gulpIf = require('gulp-if');
const config = require('../config').images;

gulp.task('images', () => {
    return gulp.src(config.src+'/**/*')
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(cache(imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.gifsicle({interlaced: true}),
        imagemin.optipng({optimizationLevel: 7}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
    ])))
    .pipe(gulpIf(options.env === 'production', rev()))
    .pipe(gulp.dest(config.dest))
    .pipe(gulpIf(options.env === 'production', rev.manifest()))
    .pipe(gulpIf(options.env === 'production', gulp.dest(config.rev)))
    .pipe(gulpIf(options.env === 'production', notify({message: 'images build success!'})));
});