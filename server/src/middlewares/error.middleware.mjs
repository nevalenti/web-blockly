export const notFound = (req, res, next) => {
  const error = new Error(`${req.originalUrl} - Not found`);

  res.status(404);

  return next(error);
};

export const errorHandler = (err, req, res) => {
  const { NODE_ENV } = process.env;
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  if (NODE_ENV === 'PRODUCTION') {
    return res.send(err.message);
  }

  return res.send(`${err.message}\n${err.stack}`);
};

const errorMiddleware = {
  notFound,
  errorHandler,
};

export default errorMiddleware;
