import AppDataSource from '../database/data-source';
import app from './app';

const PORT = process.env.APP_PORT || 3001;

AppDataSource.initialize().then(async () => {
  app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
}).catch((error) => {
  console.log('Connection database generated an error://DataBase Erro:\r\n');
  console.error(error);
});
