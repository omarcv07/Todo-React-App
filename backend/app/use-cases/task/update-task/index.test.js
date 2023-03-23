import { expect } from 'chai';
import * as models from '../../../data-access/index.js';
import makePutTask from './index.js';

describe('makePutTask', () => {
  it('should update a task and return the updated task', async () => {
    const taskData = {
      title: 'Finish the homework',
      description: 'I have to finish this challenge in 7 days',
      status_id: 2,
      priority_id: 1
    };

    const putTask = makePutTask(models);
    const task = await putTask({ params: { id: 1 }, body: taskData });
    expect(task).to.be.an('object');
    expect(task.title).to.be.equal(taskData.title);
    expect(task.description).to.be.equal(taskData.description);
  });

  it('should return an error if task ID is missing', async () => {
    const invalidTaskData = {
      title: 'Finish the homework',
      description: 'I have to finish this challenge in 7 days',
      status_id: 2,
      priority_id: 1
    };

    const putTask = makePutTask(models);
    try {
      await putTask({ params: { id: null }, body: invalidTaskData });
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Invalid type or missing params');
    }
  });

  it('should return an error if values are not integers', async () => {
    const invalidTaskData = {
      title: 'Finish the homework',
      description: 'I have to finish this challenge in 7 days',
      status_id: 'asdasd',
      priority_id: 1
    };

    const putTask = makePutTask(models);
    try {
      await putTask({ body: invalidTaskData, params: { id: null } });
      expect.fail('should throw an error');
    } catch (error) {
      expect(error.message).to.equal('Invalid type or missing params');
    }
  });
});
