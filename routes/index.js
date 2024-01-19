const router = require('express').Router();

router.get('/', (req, res) => {
    // swagger.tags [Hello world!]
    res.send('Hello World, This is home router');
  });

  router.use('/', require('./swagger'));
  router.use('/contacts', require('./contacts'));


  module.exports = router;