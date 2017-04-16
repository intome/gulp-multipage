/**
 * Created by Administrator on 2017/4/15.
 */
'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
        scrollProportionally: false,
        startPath: '/template/'
    });
});

module.exports = {
    browserSync: browserSync
};