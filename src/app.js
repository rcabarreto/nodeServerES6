import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import db from './models/index';

import indexRoutes from './routes/index';

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes());

db.sequelize.sync();

export default app;
