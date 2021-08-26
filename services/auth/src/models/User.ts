import mongoose from 'mongoose';

interface UserDoc extends mongoose.Document {
  username: string;
  password: string;
  email: string;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserDoc>('User', UserSchema);

export { User };
