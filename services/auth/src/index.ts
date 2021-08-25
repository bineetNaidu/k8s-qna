import { app } from './app';
import mongoose from 'mongoose';

(async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined!!');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('>> Auth MONGO DB : Connected');
  } catch (e) {
    console.error(e.message);
  }

  app.listen(4242, () => {
    console.log('Server started on port 4242');
  });
})();
