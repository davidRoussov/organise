import express from 'express';
import F3 from '../models/F3';

module.exports = {
  getCategories: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      try {
        const categories = await F3.getCategories(userID);
        response.status(200).send({ categories });
      } catch(error) {
        console.error('Unable to retrieve F3 categories');
        console.error(error);
        response.status(500).send({ message: 'Unable to retrieve F3 categories' });
      }
    } else {
      console.log('Missing user ID from session when trying to get f3 categories');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  createNewCategory: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.newCategory) {
        const newCategory = request.body.newCategory;
        try {
          await F3.createCategory(userID, newCategory);
          response.status(201).send({ success: true });
        } catch(error) {
          console.error('Unable to create F3 category');
          console.error(error);
          response.status(500).send({ message: 'Unable to create F3 category' });
        }
      }
    } else {
      console.log('Missing user ID from session when trying to create F3 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
};