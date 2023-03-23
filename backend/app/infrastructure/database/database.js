import { DATABASE } from '../../config.js';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(DATABASE.NAME, DATABASE.USER, DATABASE.PASSWORD, {
  host: DATABASE.HOST,
  port: DATABASE.PORT,
  dialect: DATABASE.DIALECT
});
