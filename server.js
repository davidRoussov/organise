import { MONGO_URI, SESSION_SECRET } from './secret';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';

const MongoStore = require('connect-mongo')(session);
mongoose.connect(MONGO_URI, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongo!'));

const express = require('express');
const app = express();

const router = express.Router();
const routes = require('./api/routes');

app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use((request, response, next) => {
  response.header('Access-Control-ALlow-Origin', 'http://localhost:3000');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (request, response) => {
  response.send('Hello, World!');
});

app.listen(3001, () => console.info('listening on port 3001'));