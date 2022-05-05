import express from 'express';

import { getUserById } from '../../controllers/users.controller.mjs';

const router = express.Router();

router.route('/:id')
  .get(getUserById);

export default router;
