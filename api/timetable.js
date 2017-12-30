import express from 'express';
import Timetable from '../models/timetable';

module.exports = {
  saveVisibleTimes: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.times) {
        const times = request.body.times;
        try {
          await Timetable.saveVisibleTimes(userID, times);
          response.status(200).send({ success: true });
        } catch(error) {
          console.error('Unable to update timetable visible times');
          console.error(error);
          response.status(500).send({ message: 'a database error occurred' });
        }
      } else {
        console.error('Missing times property from request body');
        reponse.status(400).send({ message: 'Missing times property from request body' });
      }
    } else {
      console.log('Missing user ID from session when trying to update timetable visible times');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
};
