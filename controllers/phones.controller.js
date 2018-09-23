const Phone = require('../models/phone.model');
const mongoose = require('mongoose');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
    Phone.find()
        .then( phone => res.json(phone))
        .catch(error => next(error))
}


module.exports.get = (req, res, next) => {
    Phone.findById(req.params.id)
      .then(phone => {
        if (!phone) {
          throw createError(404, 'Phone not found');
        } else {
          res.json(phone);
        }
      })
      .catch(error => {
        next(error);
      });
  }

module.exports.create = (req, res, next) => {

}