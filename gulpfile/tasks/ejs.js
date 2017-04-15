/**
 * Created by Administrator on 2017/4/12.
 */
'use strict';

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const include = require('gulp-file-include');
const gulpIf = require('gulp-if');
const config = require('../config').html;
const browserSync = require('./broswersync').browserSync;

console.log(options);

gulp.task('ejs', function() {
    return gulp.src(config.src+'/**/*.html')
    .pipe(ejs())
    .pipe(gulpIf(options.env === 'development',browserSync.reload({stream:true})))
    .pipe(gulp.dest(config.dest));
});