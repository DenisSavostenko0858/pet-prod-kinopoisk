require('dotenv').config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import fileUploader from 'express-fileupload';

import sequelize from './database';
import router from './router/index_router';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUploader({}));
app.use('/api', router);

const startedServer = () => {
    try {
        app.listen(PORT, async () => {
            await sequelize.authenticate();
            await sequelize.sync();
            console.log(`Сервер запущен: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error(error);
    }
}

startedServer();

