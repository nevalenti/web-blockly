import prisma from '../lib/prisma.mjs';
import usersData from '../data/users.data.mjs';
import projectsData from '../data/projects.data.mjs';
import testData from '../data/test.data.mjs';

async function main() {
  await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });

  const firstUser = await prisma.user.findFirst({
    where: {
      email: 'valentin.negru99@e-uvt.ro',
    },
  });
  const userId = firstUser.id;

  await prisma.project.createMany({
    data: await Promise.all(projectsData.map((project) => ({ ...project, userId }))),
    skipDuplicates: true,
  });

  await prisma.test.createMany({
    data: testData,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
