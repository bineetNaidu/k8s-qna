import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import argon from 'argon2';

const r = Router();

r.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  // Check if username is already taken
  const isExistingUser = await User.findOne({ username, email });
  if (isExistingUser) {
    res.status(409).json({
      message: 'Username or Email already taken',
    });
    return;
  }
  // Hash the password
  const hash = argon.hash(password);
  // Create the user
  const user = new User({
    username,
    email,
    password: hash,
  });
  // Save the user
  await user.save();
  // create the token
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    'SECRET'
  );

  res.status(201).json({
    token,
    data: user,
  });
});

export { r as registerRouter };
