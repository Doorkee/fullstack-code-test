import mongoose from 'mongoose';
import { db } from '../../../config';

const { mongoose: { outputOptions } } = db;

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: String,
}, outputOptions);

userSchema.virtual('fullName').get(function fullName() {
  return `${this.firstName} ${this.lastName}`;
});

export default mongoose.model('User', userSchema);
