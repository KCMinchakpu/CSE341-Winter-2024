const contactsRouter = require('express').Router();

contactsRouter.get('/', (req, res) => {
    res.send('Hello World, This is home router');
  });

  contactsRouter.use('/contacts', require('./contacts'));


  module.exports = contactsRouter;