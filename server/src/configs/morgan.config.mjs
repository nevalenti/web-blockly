import logger from 'morgan';

const morgan = logger('dev', {
  skip(req) {
    if (req.url === '/ping') {
      return true;
    }
    return false;
  },
});

export default morgan;
