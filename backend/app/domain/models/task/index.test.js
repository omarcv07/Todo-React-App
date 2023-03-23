import { expect } from 'chai';
import { sequelize } from '../../../infrastructure/database/database.js';
import Tasks from './index.js';

describe('Task Model', () => {
  beforeEach(async () => {
    // Synchronize the model with the database
    await sequelize;
  });

  describe('Properties', () => {
    it('should have property id', () => {
      expect(Tasks.rawAttributes).to.have.property('id');
    });

    it('should have property title', () => {
      expect(Tasks.rawAttributes).to.have.property('title');
    });

    it('should have property description', () => {
      expect(Tasks.rawAttributes).to.have.property('description');
    });

    it('should have property status_id', () => {
      expect(Tasks.rawAttributes).to.have.property('status_id');
    });

    it('should have property priority_id', () => {
      expect(Tasks.rawAttributes).to.have.property('priority_id');
    });

    it('should have property due_date', () => {
      expect(Tasks.rawAttributes).to.have.property('due_date');
    });

    it('should have property created_at', () => {
      expect(Tasks.rawAttributes).to.have.property('created_at');
    });

    it('should have property updated_at', () => {
      expect(Tasks.rawAttributes).to.have.property('updated_at');
    });
  });

  describe('Table Name', () => {
    it('should have the table name "Tasks"', () => {
      expect(Tasks.tableName).to.equal('tasks');
    });
  });

  describe('Timestamps', () => {
    it('should use the column name "created_at" for createdAt', () => {
      expect(Tasks.options.createdAt).to.equal('created_at');
    });

    it('should use the column name "updated_at" for updatedAt', () => {
      expect(Tasks.options.updatedAt).to.equal('updated_at');
    });
  });
});
