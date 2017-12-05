import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';

module.exports = {
  signup: (request, response) => {
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
  }
}