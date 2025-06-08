import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import items from './Routes/items.route';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(items);

export default app;
