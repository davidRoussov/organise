import express from 'express';
import F2 from '../models/f2';

module.exports = {
  createNewCategory: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      console.log('erfg9e8r7ghe');
      console.log(request.body);
    } else {
      console.log('Missing user ID form session when trying to get F1 notes');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
}