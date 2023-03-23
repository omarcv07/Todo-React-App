import { expect } from 'chai';
import { taskDb } from '../index.js';

describe('Task DB', () => {
  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const res = await taskDb.findAll();
      expect(res).to.be.an('array');
    });
  });

  describe('findOne', () => {
    it('should return a task with the given ID', async () => {
      const res = await taskDb.findOne(1);
      const task = res.dataValues;
      expect(task).to.have.property('id', 1);
      expect(task).to.have.property('title');
      expect(task).to.have.property('description');
      expect(task).to.have.property('status_id');
      expect(task).to.have.property('priority_id');
      expect(task).to.have.property('due_date');
    });
  });

  describe('insert', () => {
    it('should insert a new task', async () => {
      const newTask = {
        title: 'Walk the dog',
        description: 'I have to walk the dog for 1 hour',
        status_id: 1,
        priority_id: 1
      };

      const res = await taskDb.insert(newTask);
      const task = res.dataValues;

      expect(task).to.have.property('id');
      expect(task).to.have.property('title', newTask.title);
      expect(task).to.have.property('description', newTask.description);
      expect(task).to.have.property('status_id', newTask.status_id);
      expect(task).to.have.property('priority_id', newTask.priority_id);
    });
  });

  describe('update', () => {
    const updatedTask = {
      title: 'Go to the gym',
      description: 'I have to go to the gym and bench 225 lbs today',
      status_id: 1,
      priority_id: 1,
      due_date: '40'
    };

    it('should update an existing task', async () => {
      const res = await taskDb.update(1, updatedTask);
      expect(res).to.have.property('id', 1);
      expect(res).to.have.property('description', updatedTask.description);
    });
  });
});
