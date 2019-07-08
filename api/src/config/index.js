/* eslint-disable no-param-reassign,no-underscore-dangle */

import dotenv from 'dotenv';
import path from 'path';

const envFile = process.env.NODE_ENV === 'test' ? '.test.env' : '.env';
dotenv.config({ path: path.resolve(__dirname, `../../${envFile}`) });

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
  log: {
    level: process.env.LOG_LEVEL || 'dev',
  },
};

export const db = {
  url: process.env.MONGODB_URL || 'mongodb://localhost:27017/fullstack-code-test',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  mongoose: {
    outputOptions: {
      toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
          delete ret.password;
          delete ret.__v;
          delete ret._id;
        },
      },
      toObject: {
        virtuals: true,
      },
    },
  },
};

export const cors = {
  origin: '*',
  methods: 'GET,HEAD,OPTIONS,POST,PATCH,DELETE',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept',
};
