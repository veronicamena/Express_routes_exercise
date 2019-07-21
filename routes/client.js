var express = require('express');
var router = express.Router();

var moment = require('moment');
var startTime = moment('08:00 am', "HH:mm a");
var endTime = moment('05:00 pm', "HH:mm a");


/* GET home page. */

router.get('/index', function (req, res, next) {
    if ((moment().isBefore(endTime)) && (moment().isAfter(startTime))) return res.json('Acceso permitido')
    res.json('Lo sentimos, el acceso ya no está disponible.')
});

router.get('/new', function (req, res, next) {
    if ((moment().isBefore(endTime)) && (moment().isAfter(startTime))) return res.json('Acceso permitido')
    res.json('Lo sentimos, el acceso ya no está disponible.')
});

router.get('/create', function (req, res, next) {
    if ((moment().isBefore(endTime)) && (moment().isAfter(startTime))) return res.json('Acceso permitido')
    res.json('Lo sentimos, el acceso ya no está disponible.')
});

module.exports = router;
