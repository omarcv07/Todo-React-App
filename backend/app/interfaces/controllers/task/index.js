import {
  postTask,
  putTask,
  findTask,
  findAllTask,
  removeTask
} from '../../../use-cases/task/index.js';

export default Object.freeze({
  findAllTask: httpRequest => findAllTask(httpRequest),
  findTask: httpRequest => findTask(httpRequest),
  postTask: httpRequest => postTask(httpRequest),
  putTask: httpRequest => putTask(httpRequest),
  removeTask: httpRequest => removeTask(httpRequest)
});
