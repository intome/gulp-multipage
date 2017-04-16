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
    runSequence('browser-sync', 'ejs', 'sprite', 'scss', 'images', 'script','watch');
});

/* 生产环境 */
gulp.task('build', ['del'], () => {
    let end = function(){
        console.log('gulp build end!');
    };
  runSequence('ejs', 'sprite', 'scss', 'images', 'rev:css', 'css','script', 'rev', end);
});
