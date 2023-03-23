import express from 'express';
import tasks from './task/index.js';

const router = express.Router();

router.use(tasks);

export default router;
