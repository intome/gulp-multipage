/**
 * @Description : config.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

const src = './src';
const dest = './dist';

module.exports = {
  scss: {
    src: src+'/sass/*.scss',
    all: src+'/sass/**/*.scss',
    dest: dest+'/css',
    rev: dest+'/rev/css',
    maps: src+'/css'
  },
  css: {
    src: src+'/css',
    dest: dest+'/css',
    settings: {
        compatibility: 'ie8'
    }
  },
  script: {
    src: src+'/js/app/**/*.js',
    lib: src+'/js/lib',
    dest: dest+'/js',
    srcDev: src+'/js',
    rev: dest+'/rev/js'
  },
  images: {
    src: src+'/img/**/*',
    dest: dest+'/img',
    rev: dest+'/rev/img'
  },
  rev: {
    revJson: dest+'/rev/**/*.json',
    all: src+'/template/**/*.html',
    src: src+'/template/*.html',
    dest: dest+'/template'
  },
  del: {
    src: src,
    dest: dest
  }
};