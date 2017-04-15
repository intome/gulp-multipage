/**
 * @Description : scss.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config').scss;

/* 开发环境编译 */
gulp.task('scss:dev', () => {
  return gulp.src(config.all)
  .pipe(plumber({'errorHandler':notify.onError({
      'title':'SCSS Error',
      'message':'Error: <%= error.message %>'
  })}))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 version','Chrome >= 30', 'last 3 Safari versions', 'IE >= 9', 'IOS >= 7', 'Android >= 4'],
    cascade: true
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.dest));
});

/* 生成环境编译 */
const rev = require('gulp-rev');
const cssConfig = require('../config').css;
gulp.task('scss', () => {
  return gulp.src(config.all)
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 version','Chrome >= 30', 'last 3 Safari versions', 'IE >= 9', 'IOS >= 7', 'Android >= 4'],
    cascade: true
  }))
  .pipe(rev())
  .pipe(gulp.dest(config.dest))
  .pipe(rev.manifest())
  .pipe(gulp.dest(config.rev))
  .pipe(notify({message: 'scss build success!'}));
});