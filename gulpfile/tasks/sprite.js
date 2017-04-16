/**
 * @Description : sprite.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/16
 */
'use strict';
const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const configImages = require('../config').images;
const configSass = require('../config').scss;

gulp.task('sprite', () => {
    let spriteData = gulp.src([configImages.sprite+'/**/*.png','!'+configImages.src+'/_sprite.png'])
    .pipe(spritesmith({
        imgName: '_sprite.png',
        imgPath: '../img/_sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'scss',
        cssTemplate: 'gulpfile/scss.template.mustache',
        cssOpts: 'spriteSrc'
    }));

    let imgStream = spriteData.img
    .pipe(gulp.dest(configImages.src));

    let cssStream = spriteData.css
    .pipe(gulp.dest(configSass.src));

    console.log('sprite build end!');

    return merge(imgStream, cssStream);
});
