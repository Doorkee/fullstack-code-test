import { user } from '../services';

export const signUp = async (req, res) => {
  const {
    body: {
      firstName,
      lastName,
      email,
      password,
    },
  } = req;

  req.statusCode = 201;
  req.message = 'Successfully created user';
  req.operation = user.create({
    firstName,
    lastName,
    email,
    password,
  });

  res.exec();
};

export const logIn = async (req, res) => {
  const {
    body: {
      email,
      password,
    },
  } = req;

  req.statusCode = 200;
  req.message = 'Successfully logged in user';
  req.operation = user.logIn({
    email,
    password,
  });

  res.exec();
};
