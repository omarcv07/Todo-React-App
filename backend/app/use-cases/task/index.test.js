import { expect } from 'chai';
import taskService from './index.js';

describe('Integration tests', () => {
  it('factoryService should have the correct methods', () => {
    expect(taskService).to.have.property('findTask');
    expect(taskService).to.have.property('findAllTask');
    expect(taskService).to.have.property('putTask');
    expect(taskService).to.have.property('postTask');
  });
});
