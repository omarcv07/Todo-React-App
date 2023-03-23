import { taskDb } from '../../data-access/index.js';

import makeFindAllTask from './find-all-task/index.js';
import makeFindTask from './find-task/index.js';
import makePostTask from './post-task/index.js';
import makeRemoveTask from './remove-task/index.js';
import makePutTask from './update-task/index.js';

const findAllTask = makeFindAllTask({
  taskDb
});

const findTask = makeFindTask({
  taskDb
});

const postTask = makePostTask({
  taskDb
});

const putTask = makePutTask({
  taskDb
});

const removeTask = makeRemoveTask({
  taskDb
});

const taskService = Object.freeze({
  postTask,
  putTask,
  findTask,
  findAllTask,
  removeTask
});

export { postTask, putTask, findTask, findAllTask, removeTask };

export default taskService;
