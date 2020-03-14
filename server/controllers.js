/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const Trip = require('../db/schema.js');
const db = require('../db/index.js');

const controllers = {
  findAll: (req, res) => (
    Trip.find({})
      .then((trips) => res.status(200).send(trips.map((trip) => [trip.id, trip.name, trip.season, trip.year, trip.continent, trip.cities, trip.country])))
      .catch((err) => res.status(400).send(err))
  ),
  findOne: (req, res) => (
    Trip.find({ id: req.params.id })
      .then((trip) => res.status(200).send(trip))
      .catch((err) => res.status(400).send(err))
  ),

};

module.exports = controllers;
