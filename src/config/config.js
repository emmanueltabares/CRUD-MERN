import dotenv from 'dotenv';

dotenv.config();

export default {

    DEV_HOST: process.env.DEV_HOST || 'localhost',
    DEV_PORT: process.env.DEV_PORT || '8080',
    DEV_DB: process.env.DEV_DB || 'db'
}