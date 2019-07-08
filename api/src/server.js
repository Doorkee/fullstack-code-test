import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import * as config from './config';
import { logger } from './util';
import api from './api';

const {
  db: { options },
  env: {
    nodeEnv,
    port,
    log: {
      level: logLevel,
    },
  },
  cors: corsOptions,
} = config;

export default (dbUrl) => {
  const app = express();

  if (nodeEnv !== 'test') {
    app.use(morgan(logLevel));
  }

  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors(corsOptions));

  app.use('/api', api());

  app.connect = async () => {
    logger.info('Attempting to connect to db...');
    await mongoose.connect(dbUrl, options);
    logger.success(`Server is connected to mongo at ${dbUrl}`);
  };

  app.start = async () => {
    logger.info('Starting server...');
    const server = await app.listen(port);
    logger.success(`Server is listening on port ${port}`);
    return server;
  };

  app.disconnect = async () => {
    logger.info('Attempting to disconnect from db...');
    await mongoose.disconnect();
    logger.success('Successfully disconnected from db');
  };

  return app;
};
