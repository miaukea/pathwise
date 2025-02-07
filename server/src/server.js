import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/connection.js';
import { apiRouter } from './routes/routes_index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
}

app.use(express.json());
app.use(apiRouter);

const forceDatabaseRefresh = process.env.FORCE_DATABASE_REFRESH === '1' || false;
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
