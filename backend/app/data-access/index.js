import models from '../domain/models/index.js';

import makeTaskDb from './tasks/index.js';

const taskDb = makeTaskDb(models);

export { taskDb };
