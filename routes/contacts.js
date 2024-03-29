const express = require('express');
const router = require('express').Router();
const ObjectId = require("mongodb").ObjectId;

const contactsController = require('../controllers/contacts');

//Read (Get) records from database
router.get('/', contactsController.getAllData);
router.get('/:id', contactsController.getSingleData);

module.exports = router;