import express from 'express';
import config from './config/config';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/index';
import { mongoose } from './db';

const app = express();

app.set('port', config.DEV_PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`Server up in Port ${app.get('port')}`)
})