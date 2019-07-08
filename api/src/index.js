import createApp from './server';
import { logger } from './util';
import { db } from './config';

const app = createApp(db.url);

(async () => {
  try {
    await app.connect();
    await app.start();
  } catch (err) {
    logger.error(err);
  }
})();
