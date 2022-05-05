import prisma from '../lib/prisma.mjs';
import HttpStatusCodes from '../constants/HttpStatusCodes.mjs';

export const getUserById = async (req, res) => {
  const { id } = req.params;
  let user;

  try {
    user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    return res.status(HttpStatusCodes.InternalServerError).json({
      error: 'Database error.',
    });
  }

  return res.status(HttpStatusCodes.OK).send(user);
};

const usersController = {
  getUserById,
};

export default usersController;
