export const MONGO_URI = process.env.NODE_ENV === 'production' ?
  `mongodb://david.roussov:hhuhb876g0@ds044667.mlab.com:44667/organise` :
  'mongodb://localhost/organise';

export const SESSION_SECRET = '8t498thuf489afur389wrnf;ve9faw0e3v9[3v39-wanrwaeirufhw37nva';