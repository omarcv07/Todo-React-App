import { expect } from 'chai';
import taskController from './index.js';

describe('Integration tests', () => {
  it('taskController should have the correct methods', () => {
    expect(taskController).to.have.property('findTask');
    expect(taskController).to.have.property('findAllTask');
    expect(taskController).to.have.property('putTask');
    expect(taskController).to.have.property('postTask');
  });
});
