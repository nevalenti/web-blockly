import axios from '../../../lib/axios';

export const getProjectsStatuses = (data) => {
  const promises = [];
  let newProjectsStatuses = [];

  data.forEach((_project, index) => {
    promises.push(axios.post('/projects/ping', { PORT: `900${index + 1}` }));
  });
  return Promise.all(promises).then((responses) => {
    newProjectsStatuses = responses.map((projectStatus, index) => ({
      PORT: `900${index + 1}`, status: projectStatus.status,
    }));
    return newProjectsStatuses;
  });
};

export default getProjectsStatuses;
