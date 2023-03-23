import { expect } from 'chai';
import { taskDb } from './index.js';

describe('Integration tests', () => {
  it('taskDb should have the correct methods', () => {
    expect(taskDb).to.have.property('insert');
    expect(taskDb).to.have.property('update');
    expect(taskDb).to.have.property('findAll');
    expect(taskDb).to.have.property('findOne');
    expect(taskDb).to.have.property('remove');
  });
});
