/**
 * @Description : script.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config').script;
const concat = require('gulp-concat');

/* 开发环境 */
gulp.task('script:dev', () => {
  return gulp.src([config.src,+'!'+config.lib])
  .pipe(plumber({'errorHandler':notify.onError({
      'title':'script Error',
      'message':'Error: <%= error.message %>'
  })}))
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(config.dest))
});

/* 生产环境 */
const rev = require('gulp-rev');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('script', () => {
  return gulp.src([config.src,+'!'+config.lib])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(rev())
  .pipe(gulp.dest(config.dest))
  .pipe(rev.manifest())
  .pipe(gulp.dest(config.rev))
  .pipe(notify({message: 'script build success!'}));
});