import { Sequelize } from 'sequelize';
import path from 'path';

const sequelize = new Sequelize(undefined, undefined, undefined, {
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../', '/data/test.sqlite'),
  logging: console.log,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = sequelize.import(`${__dirname}/user.js`);

export default db;
