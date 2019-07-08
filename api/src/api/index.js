import { Router } from 'express';
import v1Routes from './v1';

export default () => {
  const router = Router();

  router.use('/v1', v1Routes());

  return router;
};
