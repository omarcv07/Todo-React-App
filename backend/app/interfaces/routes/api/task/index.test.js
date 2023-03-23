import { expect } from 'chai';
import express from 'express';
import request from 'supertest';
import taskRoutes from './index.js';

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

describe('taskRoutes', () => {
  describe('GET /api/tasks', () => {
    it('should respond with a list of tasks', async () => {
      const res = await request(app).get('/api/tasks');
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data).to.be.an('array');
    });
  });

  describe('GET /api/tasks/:id', () => {
    it('should respond with a task object', async () => {
      const res = await request(app).get('/api/tasks/1');
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data).to.be.an('object');
      expect(res.body.data.id).to.be.equal(1);
    });

    it('should respond with a 404 status_id if the task is not found', async () => {
      const res = await request(app).get('/api/tasks/999');
      expect(res.body.code).to.be.equal(400);
      expect(res.body.error.description).to.be.equal('Task not found');
    });
  });

  describe('POST /api/tasks', () => {
    it('should create a new task and respond with the new task object', async () => {
      const newTask = {
        title: 'Finish the workbook',
        description: 'I have to finish this challenge in 7 days',
        status_id: 2,
        priority_id: 1
      };
      const res = await request(app).post('/api/tasks').send(newTask);
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data.description).to.be.equal(newTask.description);
    });
  });

  describe('PUT /api/tasks/:id', () => {
    it('should update an existing task and return the updated task object', async () => {
      const updatedTask = {
        title: 'This is an update',
        description: 'This a description update'
      };
      const res = await request(app).put('/api/tasks/1').send(updatedTask);
      expect(res.status).to.be.equal(200);
      expect(res.body.data.description).to.be.equal(updatedTask.description);
    });

    it('should respond with a 404 status if the task is not found', async () => {
      const res = await request(app).put('/api/tasks/999');
      expect(res.status).to.be.equal(400);
    });
  });
});
