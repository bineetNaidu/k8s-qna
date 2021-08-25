import { Router } from 'express';

const r = Router();

r.get('/login', (req, res) => {
  res.send('Auth service');
});

export { r as loginRouter };
