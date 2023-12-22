var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function (req, res) {
    db.Order.findAll()
        .then(order => {
            res.status(200).send(JSON.stringify(order));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function (req, res) {
    db.Order.findByPk(req.params.id)
        .then(order => {
            res.status(200).send(JSON.stringify(order));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function (req, res) {
    db.Order.create({
        id: req.body.id,
        name: req.body.name,
        timestamp: req.body.date
    })
        .then(order => {
            res.status(200).send(JSON.stringify(order));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function (req, res) {
    db.Order.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;