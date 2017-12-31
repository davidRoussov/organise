import express from 'express';
import Timetable from '../models/timetable';

module.exports = {
  updateCellColor: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;    
      if(request.body && request.body.cell && request.body.hasOwnProperty('color')) {
        const cell = request.body.cell;
        const color = request.body.color;
        await Timetable.updateCellColor(userID, cell, color);
        response.status(200).send({ success: true });
      } else {
        const errorMessage = 'request body or cell or color properties missing from request';
        console.log(errorMessage);
        response.status(400).send({ message: errorMessage });
      }
    } else {
      console.log('Missing user ID from session when trying to update table cell');
      response.status(400).send({ message: 'Invalid session' });
    }
  },

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

  saveSettings: async (request, response) => {
    if(request.session && request.session.userId) {
      const userID = request.session.userId;
      if(request.body && request.body.times && request.body.hasOwnProperty('twelveHours')) {
        const times = request.body.times;
        const twelveHours = request.body.twelveHours;
        try {
          await Timetable.saveSettings(userID, times, twelveHours);
          response.status(200).send({ success: true });
        } catch(error) {
          console.error('Unable to update timetable settings');
          console.error(error);
          response.status(500).send({ message: 'a database error occurred' });
        }
      } else {
        const errorMessage = 'Missing times or twelveHours property from request body';
        console.error(errorMessage);
        response.status(400).send({ message: errorMessage });
      }
    } else {
      console.log('Missing user ID from session when trying to update timetable settings');
      response.status(400).send({ message: 'Invalid session' });
    }
  }
};
