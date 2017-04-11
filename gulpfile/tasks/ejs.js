/**
 * Created by Administrator on 2017/4/12.
 */
'use strict';

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const include = require('gulp-file-include');
const config = require('../config').html;

gulp.task('ejs', function() {
    return gulp.src(config.src+'/**/*.html')
    .pipe(ejs())
    .pipe(gulp.dest(config.dest));
});