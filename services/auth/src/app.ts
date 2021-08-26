import 'express-async-errors';
import express from 'express';
import { loginRouter } from './routes/login';
// import { registerRouter } from './routes/register';

const app = express();

app.set('trust proxy', true);
app.use(express.json());

app.use('/api/auth', loginRouter);
// app.use('/api/auth', registerRouter);

export { app };
