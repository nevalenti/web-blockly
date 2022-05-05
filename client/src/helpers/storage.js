export const storage = {
  getToken: () => {
    const item = window.localStorage.getItem('token');
    return item || '';
  },
  setToken: (token) => {
    window.localStorage.setItem('token', JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem('token');
  },
};

export default storage;
