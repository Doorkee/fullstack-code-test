import Router from 'express';
import { user } from './controllers';
import {
  error,
  format,
  exec,
} from './middleware';

export default () => {
  const router = Router();

  router.use(error);
  router.use(format);
  router.use(exec);

  router.post('/signup', user.signUp);
  router.post('/login', user.logIn);

  return router;
};
