import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)

// Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
};
