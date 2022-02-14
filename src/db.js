import mongoose from 'mongoose';
import config from './config/config';

const URI = config.DB_NAME;

(async () => {
    try {
        const db = await mongoose.connect(URI);
        console.log('Connected to', db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();

