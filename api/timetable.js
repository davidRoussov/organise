import express from 'express';
import Timetable from '../models/timetable';

module.exports = {
  updateCell: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;   
      if(request.body && request.body.time && request.body.day) {
        const { time, day, text } = request.body;
        await Timetable.updateCell(userID, time, day, text);
        response.status(200).send({ success: true });
      } else {
        const errorMessage = 'Missing body, time or day from the request';
        console.error(errorMessage);
        response.status(400).send({ message: errorMessage });
      }
    } else {
      console.log('Missing user ID from session when trying to update table cell');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

  get: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      try {
        const timetable = await Timetable.get(userID);
        response.status(200).send({ ...timetable[0] });
      } catch(error) {
        console.error('Unable to get timetable data');
        console.error(error);
        response.status(500).send({ message: 'a database error occurred getting timtable data' });
      }
    } else {
      console.log('Missing user ID from session when trying to get timetable data');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

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
