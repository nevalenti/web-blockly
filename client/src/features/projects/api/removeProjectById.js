import axios from '../../../lib/axios';

export const removeProjectById = async (projectId) => axios.delete(`/projects/${projectId}`);

export default removeProjectById;
