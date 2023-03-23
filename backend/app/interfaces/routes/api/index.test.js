import request from 'supertest';

import express from 'express';
import { expect } from 'chai';

import router from './index.js';

const app = express();
app.use(router);

describe('router', () => {
  it('should return 200 for GET /tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.body.code).to.be.equal(200);
  });

  it('should return 200 for PUT /tasks/:id', async () => {
    const res = await request(app).put('/tasks/1').send({
      teeth: 12
    });
    expect(res.body.code).to.be.equal(200);
  });
});
