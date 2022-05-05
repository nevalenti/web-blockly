import express from 'express';

import passport from './passport.config.mjs';
import authRoutes from '../routes/v1/auth.route.mjs';
import usersRoutes from '../routes/v1/users.route.mjs';
import projectsRoutes from '../routes/v1/projects.route.mjs';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/users', [passport.authenticate('jwt')], usersRoutes);

router.use('/projects', [passport.authenticate('jwt')], projectsRoutes);

export default router;
