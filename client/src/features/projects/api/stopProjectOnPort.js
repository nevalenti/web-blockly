import axios from '../../../lib/axios';

export const stopProcessOnPort = async (PORT) => axios.post('/projects/stop', { PORT });

export default stopProcessOnPort;
