import { expect } from 'chai';
import * as models from '../../../data-access/index.js';
import makePostTask from './index.js';

describe('makePostTask', () => {
  it('should create a task', async () => {
    const taskData = {
      title: 'Finish the homework',
      description: 'I have to finish this challenge in 7 days',
      status_id: 2,
      priority_id: 1
    };

    const expectedTask = {
      ...taskData
    };

    const postTask = makePostTask(models);
    const task = await postTask({ body: expectedTask });
    expect(task).to.be.an('object');
    expect(task.title).to.be.equal(taskData.title);
    expect(task.description).to.be.equal(taskData.description);
  });

  it('should throw an error for invalid or missing fields', async () => {
    const invalidTaskData = {
      teeth: 10,
      pitch_diameter: 'invalid value',
      pitch: 8
    };

    const postTask = makePostTask(models);
    try {
      await postTask(invalidTaskData);
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Invalid type or missing field');
    }
  });
});
