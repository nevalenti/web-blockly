import axios from '../../../lib/axios';

export const getProjectsData = (userId) => axios.get(`/projects/${userId}`);

export default getProjectsData;
