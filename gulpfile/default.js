/**
 * @Description : default.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const minimist = require('minimist');
const knownOptions = {
    string: 'env',
    default: {env: process.env.NODE_ENV || 'production'}
};
global.options = minimist(process.argv.slice(2), knownOptions);

/* 开发环境 */
gulp.task('dev', ['del'], () => {
    runSequence('browser-sync','ejs','images:dev','scss:dev','script:dev','watch');
});

/* 生产环境 */
gulp.task('build', ['del'], () => {
    var end = function(){
        console.log('gulp build end!');
    };
  runSequence('ejs','images','scss', 'rev:css', 'script', 'css', 'rev', end);
});