import { expect } from 'chai';
import * as models from '../../../data-access/index.js';
import makeFindAllTasks from './index.js';

describe('makeFindAllTasks', () => {
  it('responds with an array of tasks', async () => {
    const findAllTask = makeFindAllTasks(models);
    const tasks = await findAllTask();
    expect(tasks).to.be.an('array');
  });
});
