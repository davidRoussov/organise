import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const SESSION_SECRET = process.env.NODE_ENV === 'production' ? process.env.SESSION_SECRET : 'monkey banana';
const MONGO_URI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb://localhost/organise';

const MongoStore = require('connect-mongo')(session);
mongoose.connect(MONGO_URI, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongo!'));

const express = require('express');
const app = express();

if(process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
  }));
}

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
  app.get('/static/*', (request, response) => {
    const path = request.originalUrl;
    response.sendFile(path, { root: __dirname + '/client/build/' });
  });

  app.get('*', (request, response) => {
    response.sendFile('index.html', { root: __dirname + '/client/build/' });
  });
}

app.listen(PORT, () => console.info(`listening on port ${PORT}`));

