import { config } from 'dotenv';

config();

export default {

    HOST_NAME: process.env.HOST_NAME || 'localhost',
    PORT: process.env.PORT || 8080,
    DB_NAME: process.env.DB_NAME || 'mongodb://localhost/test'
}