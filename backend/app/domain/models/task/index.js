import { DataTypes } from 'sequelize';
import { sequelize } from '../../../infrastructure/database/database.js';

const Tasks = sequelize.define(
  'tasks',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    status_id: {
      type: DataTypes.DECIMAL
    },
    priority_id: {
      type: DataTypes.INTEGER
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'tasks',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default Tasks;
