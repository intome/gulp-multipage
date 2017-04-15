/**
 * @Description : rev.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const gulp = require('gulp');
const rev = require('gulp-rev');
const revCollector= require("gulp-rev-collector");
const revAppend = require('gulp-rev-append');
const notify = require('gulp-notify');
const config = require('../config').rev;
const configCss = require('../config').css;

gulp.task('rev:css', () => {
    return gulp.src([config.revJson, configCss.dest+'/**/*.css'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(revAppend())
    .pipe(gulp.dest(configCss.dest))
    .pipe(notify({message: 'revCss build success!'}));
});

gulp.task('rev', () => {
    return gulp.src([config.revJson, config.dest+'/**/*.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(revAppend())
    .pipe(gulp.dest(config.dest))
    .pipe(notify({message: 'rev build success!'}));
});