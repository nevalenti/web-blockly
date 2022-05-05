import axios from '../../../lib/axios';

export const startProcessOnPort = async (PORT) => axios.post('/projects/start', { PORT });

export default startProcessOnPort;
