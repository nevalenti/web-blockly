import { nanoid } from 'nanoid';

const defaultUserId = '-1';

const projectsData = [
  {
    id: nanoid(),
    name: 'Test 1',
    userId: defaultUserId,
  },
  {
    id: nanoid(),
    name: 'Test 2',
    userId: defaultUserId,
  },
  {
    id: nanoid(),
    name: 'Test 3',
    userId: defaultUserId,
  },
  {
    id: nanoid(),
    name: 'Test 4',
    userId: defaultUserId,
  },
  {
    id: nanoid(),
    name: 'Test 5',
    userId: defaultUserId,
  },
];

export default projectsData;
