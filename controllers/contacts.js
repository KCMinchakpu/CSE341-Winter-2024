const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

//Read (GET) all contacts in the database
const getAllData = async (req, res) => {
  
        const result = await mongodb
            .getDatabase()
            .collection('contacts')
            .find();
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        });
    };
//Read (GET) one contact (based on Id) in the database
const getSingleData = async (req, res) => {

        const UserId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDatabase()
            .collection('contacts')
            .find({ _id: UserId});
            result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        });
    };




module.exports = { 
    getAllData, 
    getSingleData
};