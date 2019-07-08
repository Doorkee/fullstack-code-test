import { User } from '../models';

export const create = ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const userParams = {
    firstName,
    lastName,
    email,
    password,
  };

  return User.create(userParams);
};

export const logIn = async ({
  email,
  password,
}) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('No user found');
  }

  if (user.password !== password) {
    throw new Error('Incorrect password');
  }

  return user;
};
