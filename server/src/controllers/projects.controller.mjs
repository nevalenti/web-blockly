import axios from 'axios';
import find from 'find-process';
import jwt from 'jsonwebtoken';
import kill from 'tree-kill';
import process from 'child_process';

import prisma from '../lib/prisma.mjs';
import HttpStatusCodes from '../constants/HttpStatusCodes.mjs';

export const getProjectsByUserId = async (req, res) => {
  const authHeader = req.headers.authorization;
  const { userId } = req.params;
  const token = authHeader.substring(7, authHeader.length);
  const payload = jwt.decode(token);
  const payloadUserId = payload.id;
  let projects;

  if (payloadUserId !== userId) {
    return res.status(HttpStatusCodes.Forbidden).send({
      error: 'You can\'t access this resource.',
    });
  }

  try {
    projects = await prisma.project.findMany({
      where: {
        userId,
      },
      orderBy: [
        {
          createdAt: 'asc',
        },
        {
          name: 'asc',
        },
      ],
    });
  } catch (err) {
    return res.status(HttpStatusCodes.InternalServerError).json({
      error: 'Database error.',
    });
  }

  return res.status(HttpStatusCodes.OK).send(projects);
};

export const createProject = async (req, res) => {
  console.log('called');
};

export const deleteProjectById = async (req, res) => {
  const { projectId } = req.params;
  let project;

  if (projectId) {
    try {
      project = await prisma.project.findUnique({
        where: {
          id: projectId,
        },
      });

      await prisma.project.delete({
        where: {
          id: projectId,
        },
      });
    } catch (err) {
      return res.status(HttpStatusCodes.InternalServerError).json({
        error: 'Database error.',
      });
    }
  }

  return res.status(HttpStatusCodes.OK).send({ project, message: `Deleted project "${project?.name}".` });
};

export const startProjectOnPort = async (req, res) => {
  const { PORT } = req.body;

  const child = process.fork('./src/generated/sample.mjs', [], { env: { PORT } });

  child.on('error', (_) => res.status(HttpStatusCodes.InternalServerError).json({
    error: 'Database error.',
  }));

  return res.status(HttpStatusCodes.OK).send({ message: `Started project on port ${PORT}.`, PORT });
};

export const stopProjectOnPort = async (req, res) => {
  const { PORT } = req.body;

  find('port', PORT)
    .then((list) => {
      if (list.length) {
        kill(list[0].pid, 'SIGTERM');
      }
    }).catch((_) => res.status(HttpStatusCodes.InternalServerError).json({
      error: 'Server error.',
    }));

  return res.status(HttpStatusCodes.OK).send({ message: `Stopped project on port ${PORT}.`, PORT });
};

export const pingProjectOnPort = async (req, res) => {
  const { PORT } = req.body;

  try {
    await axios.get(`http://localhost:${PORT}/ping`, { PORT });
  } catch (err) {
    return res.status(HttpStatusCodes.OK).send({ status: false });
  }

  return res.status(HttpStatusCodes.OK).send({ status: true });
};

const projectsController = {
  getProjectsByUserId,
  createProject,
  deleteProjectById,
  startProjectOnPort,
  stopProjectOnPort,
  pingProjectOnPort,
};

export default projectsController;
