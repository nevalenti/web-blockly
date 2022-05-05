import prisma from '../lib/prisma.mjs';

const modelNames = [
  'user',
  'project',
  'service',
  'endpoint',
  'test',
];

async function main() {
  await Promise.all(modelNames.map((modelName) => prisma[modelName].deleteMany()));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
