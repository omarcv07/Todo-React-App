import express from 'express';

import taskController from '../../../controllers/task/index.js';
import makeExpressCallback from '../../make-callback.js';

const router = express.Router();

router.route('/tasks').get(makeExpressCallback(taskController.findAllTask));

router.route('/tasks/:id').get(makeExpressCallback(taskController.findTask));

router.route('/tasks').post(makeExpressCallback(taskController.postTask));

router.route('/tasks/:id').put(makeExpressCallback(taskController.putTask));

router.route('/tasks/:id').delete(makeExpressCallback(taskController.removeTask));

export default router;
