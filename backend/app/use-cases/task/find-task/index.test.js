import { expect } from 'chai';
import makeFindTask from './index.js';
import * as models from '../../../data-access/index.js';

describe('makeFindTask', () => {
  it('should throw an error if taskId param is missing', async () => {
    const findTask = makeFindTask(models);
    try {
      await findTask({ params: { id: null } });
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Missing ID param');
    }
  });

  it('should return the task if found', async () => {
    const findTask = makeFindTask(models);
    const task = await findTask({ params: { id: 1 } });
    expect(task).to.be.an('object');
  });
});
