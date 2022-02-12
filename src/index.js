import express from 'express';
import config from './config/config';

const app = express();

app.listen(config.DEV_PORT, () => {
    console.log(`Server up in Port ${config.DEV_PORT}`)
})