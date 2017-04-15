/**
 * @Description : watch.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/15
 */
'use strict';

const gulp = require('gulp');
const config = require('../config');
const browserSync = require('./broswersync');
gulp.task('watch', () => {

    gulp.watch(config.scss.all,['scss']);

    gulp.watch(config.html.all,['ejs']);

    gulp.watch(config.script.src,['script']);

});