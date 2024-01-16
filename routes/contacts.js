const express = require('express');
const contactsRouter = require('express').Router();
const ObjectId = require("mongodb").ObjectId;

const contactsController = require('../controllers/contacts');

//Read (Get) records from database
contactsRouter.get('/', contactsController.getAllData);
contactsRouter.get('/:id', contactsController.getSingleData);

module.exports = contactsRouter