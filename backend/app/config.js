import * as dotenv from 'dotenv';
dotenv.config();

export const DATABASE = {
  USER: process.env.DB_USER,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT,
  DIALECT: process.env.DB_DIALECT
};
