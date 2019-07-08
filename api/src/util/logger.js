/* eslint-disable no-console */

import {
  red,
  cyan,
  yellow,
  green,
} from 'chalk';
import moment from 'moment';
import { env } from '../config';

const defaultErrorMessage = 'Something went wrong!';
const { nodeEnv } = env;
const dateFormat = 'MM/DD/YY hh:mm:ss:SSSa';
const timestamp = () => `${moment().format(dateFormat)}:`;

class Logger {
  constructor() {
    this.log = (obj, override) => (
      nodeEnv !== 'test' && !override ? console.log(obj) : {}
    );
  }

  success(text, override = false) { this.log(green(timestamp(), text), override); }

  info(text, override = false) { this.log(cyan(timestamp(), text), override); }

  warn(text, override = false) { this.log(yellow(timestamp(), text), override); }

  error(err, override = false) {
    let message;
    let errorObj;

    if (err.response && err.response.data && err.response.data.error) {
      const {
        response: {
          data: { error: axiosError },
        },
      } = err;
      const { message: axiosMessage } = axiosError;
      message = axiosMessage;
      errorObj = axiosError;
    } else {
      message = err.message || defaultErrorMessage;
    }

    this.log(red(timestamp(), 'ERROR', message), override);

    if (nodeEnv === 'development') {
      this.log(red(err.stack), override);

      if (errorObj) {
        this.log(errorObj, override);
      }
    }

    return {
      message,
      errorObj,
    };
  }
}

export default new Logger();
