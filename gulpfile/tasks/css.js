/**
 * @Description : css.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/10
 */
'use strict';

const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const spriter = require('gulp-css-spriter');
const notify = require('gulp-notify');
const config = require('../config').css;
const configImg = require('../config').images;

gulp.task('css', ()=> {
    return gulp.src(config.dest+'/**/*.css')
    .pipe(spriter({
        'spriteSheet': configImg.dest+'/sprite.png',
        'pathToSpriteSheetFromCSS': '../img/sprite.png'
    }))
    .pipe(cleanCss(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(notify({message: 'css build success!'}));
});