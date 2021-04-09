const express = require('express');
const router = express.Router();
const Users = require('../controller');

router.get('/', (req, res, next) => {

    const onSuccess = (users) => {
        res.send(users);
    }

    const onError= (err) => {
        res.status(400).send(err);
    }

    Users.getAll(onSuccess, onError);
});

router.post('/', (req, res, next) => {
    const payload = req.body;

    const onSuccess = (users) => {
        res.status(201).send(users);
    }

    const onError= (err) => {
        res.status(400).send(err);
    }

    Users.create(payload, onSuccess, onError);
});

module.exports =  router;