import 'express-async-errors';
import express from 'express';
import { loginRouter } from './routes/login';

const app = express();

app.set('trust proxy', true);
app.use(express.json());

app.use('/api/auth', loginRouter);

export { app };
