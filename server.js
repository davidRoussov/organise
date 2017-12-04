import { uri } from './creds';
import bodyParser from 'body-parser';

const express = require('express');
const app = express();

app.use((request, response, next) => {
  response.header('Access-Control-ALlow-Origin', 'http://localhost:3000');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello, World!');
});

app.post('/signup', (request, response) => {
  console.log(JSON.stringify(request.body, null, 2));
});

app.listen(3001, () => console.info('listening on port 3001'));