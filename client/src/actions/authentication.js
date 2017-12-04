import SERVER_URL from '../config';

export const signup = user => dispatch => {
  console.log('signup action');
  console.log(JSON.stringify(user, null, 2));
};

export const login = credentials => dispatch => {
  console.log('login action');
  console.log(JSON.stringify(credentials, null, 2));
};