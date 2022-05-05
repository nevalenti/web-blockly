import prisma from '../prisma/prisma.mjs';

async function main() { await prisma.$connect(); }

main()
  .catch((err) => {
    console.log('Database connection failed: ');
    console.log(err);
  })
  .finally(async () => {
    console.log('Connected to database.');
  });
