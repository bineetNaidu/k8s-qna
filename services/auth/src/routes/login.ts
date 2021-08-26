import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import argon from 'argon2';

const r = Router();

r.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({
      message: 'Username Does not Exist!.',
    });
  }

  const validPassword = await argon.verify(user.password, password);

  if (!validPassword) {
    return res.status(401).json({
      message: 'Password is incorrect!',
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    'SECRET'
  );

  return res.json({
    token,
    data: user,
  });
});

export { r as loginRouter };
