import express from 'express';
import kill from 'tree-kill';

const { PORT } = process.env;
const projectName = new URL(import.meta.url).pathname.split('/').pop().split('.')[0];

const app = express();

app.get('/ping', (req, res) => {
  res.send({ message: 'OK' });
});

//

app.listen(PORT, () => {
  console.log(`--- ${projectName} app listening on PORT ${PORT} ---`);

  const exitHandler = () => {
    console.log(`--- ${projectName} app exited on PORT ${PORT} ---`);
    kill(process.pid, 'SIGKILL');
  };

  process.stdin.resume();
  process.on('exit', exitHandler);
  process.on('SIGTERM', exitHandler);
  process.on('SIGINT', exitHandler);
  process.on('SIGUSR1', exitHandler);
  process.on('SIGUSR2', exitHandler);
  process.on('uncaughtException', exitHandler);
});
