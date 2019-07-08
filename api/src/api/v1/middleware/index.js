import { logger } from '../../../util';

export const error = (req, res, next) => {
  res.error = err => res.send(logger.error(err));

  next();
};

export const format = (req, res, next) => {
  res.format = (data, message) => {
    const {
      query: { page },
      token,
    } = req;

    return res.send({
      message,
      data,
      token,
      page,
    });
  };

  next();
};

export const exec = (req, res, next) => {
  res.exec = async () => {
    const {
      operation,
      successCode,
      message,
    } = req;
    const statusCode = successCode || 200;

    try {
      const result = await operation;
      return res.status(statusCode).format(result, message);
    } catch (err) {
      return res.status(500).error(err);
    }
  };

  next();
};
