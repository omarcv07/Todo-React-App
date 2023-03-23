import { expect } from 'chai';
import models from './index.js';

describe('Integration tests', () => {
  it('"Tasks" model should be included', () => {
    expect(models).to.have.property('Tasks');
  });
});
