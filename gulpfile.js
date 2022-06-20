//main module
import gulp from 'gulp';
// import path constants from path.js
import { path } from './gulp/config/path.js';

// global variable
global.app = {
  path: path,
  gulp: gulp,
};

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
}

// Построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher);

gulp.task('default', dev);
