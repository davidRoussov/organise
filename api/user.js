import express from 'express';
import User from '../models/user'

module.exports = {
  get: async (request, response) => {
    if(request.session.userId) {
      try {
        const user = await User.get(request.session.userId);
        const pertinentData = {
          firstname: user.firstName,
          lastName: user.lastName,
          emailAddress: user.emailAddress,
        };
        response.status(200).send({ user: pertinentData });
      } catch(err) {
        response.status(500).send({ message: err });
      }      
    } else {
      response.status(400).send({ message: 'Invalid session' });
    }
  }
};