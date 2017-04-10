/**
 * @Description : del.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const gulp = require('gulp');
const del = require('del');
const config = require('../config').del;

gulp.task('del', () => {
  del([config.dest+'/*','!'+config.dest+'/rev']);
});