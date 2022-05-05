import express from 'express';

import {
  login,
  logout,
  me,
} from '../../controllers/auth.controller.mjs';

const router = express.Router();

router.route('/login')
  .post(login);

router.route('/logout')
  .post(logout);

router.route('/me')
  .get(me);

export default router;
