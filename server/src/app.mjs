import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import morgan from './configs/morgan.config.mjs';
import passport from './configs/passport.config.mjs';
import routes from './configs/routes.config.mjs';
import {
  notFound,
  errorHandler,
} from './middlewares/error.middleware.mjs';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(morgan);

app.use(passport.initialize());

app.use('/api/v1', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
