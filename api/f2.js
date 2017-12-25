import express from 'express';
import F2 from '../models/f2';
import F2Category from '../models/f2Category';

module.exports = {
  deleteCategory: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.categoryID) {
        const categoryID = request.body.categoryID;
        try {
          await F2.deleteCategoryNotes(categoryID);
          try {
            await F2Category.delete(categoryID);
            response.status(200).send({ success: true });
          } catch(error) {
            console.error('Unable to delete F2 category');
            console.error(error);
            response.status(500).send({ message: "Deleted F2 category notes but unable to delete F2 category" });
          }
        } catch(error) {
          console.error('Unable to delete F2 category notes');
          console.error(error);
          response.status(500).send({ message: 'Unable to delete F2 category notes before deleting the category' });
        }
      } else {
        console.log('Missing category ID from request body');
        response.status(400).send({ message: 'Missing categoryID from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to delete F2 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  deleteNote: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.noteID) {
        const noteID = request.body.noteID;
        try {
          await F2.deleteNote(noteID);
          response.status(200).send({ success: true });
        } catch(error) {
          console.error('Unable to delete F2 note');
          console.error(error);
          response.status(500).send({ message: 'A server error occurred' });
        }
      } else {
        console.log('Missing note ID from request body');
        response.status(400).send({ message: 'Missing note ID from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to delete F2 note');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  saveNote: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.note) {
        const note = request.body.note;
        try {
          await F2.saveNote(note);
          response.status(200).send({ success: true });
        } catch(error) {
          console.error('Unable to save F2 note');
          console.error(error);
          response.status(500).send({ message: 'A server error occurred' });
        }
      } else {
        console.error('Missing note from request body');
        response.status(400).send({ message: 'Missing note from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to create F2 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  getNotes: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      try {
        const notes = await F2.getNotes(userID);
        response.status(200).send({ notes });
      } catch(error) {
        console.error('Unable to get F2 notes');
        console.error(error);
        response.status(500).send({ message: 'Unable to get F2 notes' });
      }
    } else {
      console.log('Missing user ID from session when trying to create F2 category');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

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