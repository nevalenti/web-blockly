import express from 'express';

import {
  getProjectsByUserId,
  createProject,
  deleteProjectById,
  pingProjectOnPort,
  startProjectOnPort,
  stopProjectOnPort,
} from '../../controllers/projects.controller.mjs';

const router = express.Router();

router.route('/:userId')
  .get(getProjectsByUserId);

router.route('/')
  .post(createProject);

router.route('/:projectId')
  .delete(deleteProjectById);

router.route('/ping')
  .post(pingProjectOnPort);

router.route('/start')
  .post(startProjectOnPort);

router.route('/stop')
  .post(stopProjectOnPort);

export default router;
