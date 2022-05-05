import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prismaInstance = new PrismaClient();

export default prismaInstance;
