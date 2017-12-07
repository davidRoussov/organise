import express from 'express';
import F1 from '../models/f1';

module.exports = {
  post: async (request, response) => {
    if(request.session && request.session.userId) {
      if(request.body && request.body.newNote) {
        const userID = request.session.userId;
        const note = request.body.newNote;
        try {
          await F1.save(userID, note);
          response.status(201).send({ success: true });
        } catch(err) {
          console.error('Unable to save F1 note to database');
          response.status(500).send({ message: err });
        }
      } else {
        console.error('Note object missing from request body');
        response.status(400).send({ message: 'Bad data sent to the server' });
      }
    } else {
      console.error('Missing user ID from session when trying to save F1 note');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
};
