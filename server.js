import { MONGO_URI, SESSION_SECRET } from './secret';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';






// remove this

import bcrypt from 'bcryptjs';
import User from './models/user';










const MongoStore = require('connect-mongo')(session);
mongoose.connect(MONGO_URI, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongo!'));

const express = require('express');
const app = express();

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

app.get('/', (request, response) => {
  response.send('Hello, World!');
});

app.post('/signup', (request, response) => {
  console.log(JSON.stringify(request.body, null, 2));
  if(request.body.user) {
    const userData = request.body.user;
    if(userData.firstName && userData.lastName && userData.emailAddress && userData.password) {


      bcrypt.hash(userData.password, 10, (err, hash) => {

        if(err) {
          console.error('Unable to compute hash of new user password');
          console.error(err);
          response.status(500).send({ message: 'Unable to compute password hash' });
        } else {
          userData.password = hash;
          User.create(userData, (error, user) => {
            if(error) {
              console.error('Unable to create a user');
              console.error(error);
          
            } else {
              request.session.userId = user._id;
              response.send({ success: true });
            }
          });

        }




      });








    } else {
      console.log('signup failed: missing user properties');
      response.status(400).send({ message: 'invalid user data sent to the server' }); 
    }
  }
});

app.listen(3001, () => console.info('listening on port 3001'));