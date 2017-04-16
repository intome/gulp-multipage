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
const browserSync = require('./broswersync').browserSync;
const config = require('../config').scss;
const configImg = require('../config').images;
const gulpIf = require('gulp-if');
const rev = require('gulp-rev');

gulp.task('scss', () => {
  return gulp.src([config.all])
  .pipe(plumber({'errorHandler':notify.onError({
      'title':'SCSS Error',
      'message':'Error: <%= error.message %>'
  })}))
  .pipe(gulpIf(options.env === 'development', sourcemaps.init()))
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 version','Chrome >= 30', 'last 3 Safari versions', 'IE >= 9', 'IOS >= 7', 'Android >= 4'],
    cascade: true
  }))
  .pipe(gulpIf(options.env === 'production', rev()))
  .pipe(gulpIf(options.env === 'development', sourcemaps.write('./')))
  .pipe(gulp.dest(config.dest))
  .pipe(gulpIf(options.env === 'production', rev.manifest()))
  .pipe(gulpIf(options.env === 'production', gulp.dest(config.rev)))
  .pipe(gulpIf(options.env === 'production', notify({message: 'scss build success!'})))
  .pipe(gulpIf(options.env === 'development', browserSync.reload({stream: true})));
});