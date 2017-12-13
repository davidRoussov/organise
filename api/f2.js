import express from 'express';
import F2 from '../models/f2';
import F2Category from '../models/f2Category';

module.exports = {
  createNote: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.categoryID) {
        const categoryID = request.body.categoryID;
        try {
          await F2.createNote(userID, categoryID);
          response.status(201).send({ success: true });
        } catch(err) {
          response.status(500).send({ message: err });
        }
      } else {
        console.info('Unable to create new F2 note: missing request body data');
        response.status(400).send({ message: 'Missing data from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to create F2 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  createNewCategory: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.newCategory) {
        const newCategory = request.body.newCategory;
        try {
          await F2Category.save(userID, newCategory);
          response.status(201).send({ success: true });
        } catch(err) {
          response.status(500).send({ message: err });
        }
      } else {
        console.info('Unable to create new F2 category: missing request body data');
        response.status(400).send({ message: 'Missing data from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to create F2 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  getCategories: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      try {
        const categories = await F2Category.get(userID);
        response.status(200).send({ categories });
      } catch(err) {
        response.status(500).send({ message: err });
      }
    } else {
      console.log('Missing user ID from session when trying to get F2 categories');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
}