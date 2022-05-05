import axios from '../../../lib/axios';

export const logout = () => axios.post('/auth/logout');

export default logout;
