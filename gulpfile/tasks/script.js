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
const gulpIf = require('gulp-if');
const browserSync = require('./broswersync').browserSync;
const rev = require('gulp-rev');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');

gulp.task('script', () => {
  return gulp.src([config.src,+'!'+config.lib])
  .pipe(eslint({configFile: "./.eslintrc"}))
  .pipe(eslint.format())
  .pipe(plumber({'errorHandler':notify.onError({
      'title':'script Error',
      'message':'Error: <%= error.message %>'
  })}))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulpIf(options.env === 'development', sourcemaps.init()))
  .pipe(concat('bundle.js'))
  .pipe(gulpIf(options.env === 'production', uglify()))
  .pipe(gulpIf(options.env === 'production', rev()))
  .pipe(gulpIf(options.env === 'development', sourcemaps.write('.')))
  .pipe(gulp.dest(config.dest))
  .pipe(gulpIf(options.env === 'development', browserSync.reload({stream: true})))
  .pipe(gulpIf(options.env === 'production', rev.manifest()))
  .pipe(gulpIf(options.env === 'production', gulp.dest(config.rev)))
  .pipe(gulpIf(options.env === 'production', notify({message: 'script build success!'})));
});