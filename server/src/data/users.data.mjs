import argon2 from 'argon2';
import { nanoid } from 'nanoid';

const password = 'secretpass';
const hashedPassword = await argon2.hash(password);

const usersData = [
  {
    id: nanoid(),
    email: 'valentin.negru99@e-uvt.ro',
    password: hashedPassword,
    fullName: 'Valentin Negru',
    callingName: 'Vali',
  },
  {
    id: nanoid(),
    email: 'negru.valentin1795@gmail.com',
    password: hashedPassword,
    fullName: 'Valentin Negru',
    callingName: 'Vali',
  },
  {
    id: nanoid(),
    email: 'negru.valentin1999@gmail.com',
    password: hashedPassword,
    fullName: 'Valentin Negru',
    callingName: 'Vali',
  },
];

export default usersData;
