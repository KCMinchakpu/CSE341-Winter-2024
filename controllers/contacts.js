const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

//Read (GET) all contacts in the database
const getAllData = async (req, res) => {
    try {
        const result = await mongodb
            .database('project1')
            .collection('contacts')
            .find();
        result.toArray().then((list) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(list);
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

//Read (GET) one contact (based on Id) in the database
const getSingleData = async (req, res) => {
    try {
        const UserId = new ObjectId(req.params.id);
        const result = await mongodb
            .database('project1')
            .collection('contacts')
            .find({ _id: UserId});
        result.toArray().then((list) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(list[0]);
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { 
    getAllData, 
    getSingleData
};