import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

import prisma from '../lib/prisma.mjs';
import HttpStatusCodes from '../constants/HttpStatusCodes.mjs';

const { SECRET } = process.env;
const ONE_DAY = 24 * 60 * 60;
const ONE_YEAR = ONE_DAY * 365;

export const login = async (req, res) => {
  const { email, password } = req.body;
  let user;

  try {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (err) {
    return res.status(HttpStatusCodes.InternalServerError).json({
      error: 'Database error.',
    });
  }

  if (user && await argon2.verify(user.password, password)) {
    const token = jwt.sign({
      id: user.id,
      email: user.email,
    }, SECRET, { expiresIn: ONE_YEAR });

    res.cookie('token', token, { httpOnly: true, maxAge: ONE_YEAR });

    return res.status(HttpStatusCodes.OK).json({
      id: user.id,
      jwt: token,
      message: 'Logged in.',
      user,
    });
  }

  return res.status(HttpStatusCodes.Unauthorized).json({
    error: 'Credentials are invalid.',
  });
};

export const me = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.substring(7, authHeader.length);
  const id = jwt.decode(token)?.id || '-1';
  let user;

  if (!token) {
    return res.status(HttpStatusCodes.BadRequest).json({
      error: 'Token must be provided.',
    });
  }

  return jwt.verify(token, SECRET, async (error) => {
    if (error) {
      return res.status(HttpStatusCodes.Unauthorized).json({
        error: 'Provided token is invalid.',
      });
    }

    try {
      user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(HttpStatusCodes.InternalServerError).json({
        error: 'Database error.',
      });
    }
  });
};

export const logout = async (req, res) => res
  .cookie('token', '', { maxAge: ONE_YEAR })
  .status(HttpStatusCodes.OK)
  .json({ message: 'Logged out.' });

const authController = {
  login,
  logout,
  me,
};

export default authController;
