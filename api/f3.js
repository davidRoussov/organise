import express from 'express';
import F3 from '../models/f3';

module.exports = {
  deleteCategory: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.categoryID) {
        const categoryID = request.body.categoryID;
        try {
          await F3.deleteCategory(userID, categoryID);
          response.status(200).send({ message: 'Successfully deleted F3 category' });
        } catch(error) {
          console.error('Unable to delete F3 category from database');
          console.error(error);
          response.status(500).send({ message: error });
        }
      } else {
        const errorMessage = 'Missing request body or categoryID from request body';
        console.error(errorMessage);
        response.status(400).send({ message: errorMessage });
      }
    } else {
      console.log('Missing user ID from session when trying to delete f3 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  saveCategory: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.newCategory) {
        const newCategory = request.body.newCategory;
        try {
          await F3.update(userID, newCategory);
          response.status(200).send({ success: true });
        } catch(error) {
          console.error("Unable to update F3 category");
          console.error(error);
          response.status(500).send({ message: "server error, unable to update F3 category" });
        }
      } else {
        console.error('Missing newCategory property from request body');
        reponse.status(400).send({ message: 'Missing newCategory property from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to update f3 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

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
      } else {
        console.error('Missing newCategory property from request body');
        reponse.status(400).send({ message: 'Missing newCategory property from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to create F3 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
};