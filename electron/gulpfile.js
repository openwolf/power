const gulp = require('gulp');
const gutil = require('gulp-util');
const electron = require('electron-connect').server.create();

gulp.task('watch:electron', function () { // watch:electron 为你的任务名字
  electron.start();
  gulp.watch(['main.js'], electron.restart);//这里的路径根据你的文件路径来
  gulp.watch(['*.html','assets/**/*.{html,js,css}'], electron.reload);//这里的路径根据你的文件路径来
});