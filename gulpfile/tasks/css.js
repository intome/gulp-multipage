/**
 * @Description : css.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/10
 */
'use strict';

const gulp = require('gulp');
const assetRev = require('gulp-asset-rev');
const cleanCss = require('gulp-clean-css');
const notify = require('gulp-notify');
const config = require('../config').css;

gulp.task('css', ()=> {
    return gulp.src(config.dest+'/**/*.css')
    .pipe(cleanCss(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(notify({message: 'css build success!'}));
});