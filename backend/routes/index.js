const express = require('express');
// const async = require('async');
// const login = require('./../models/login');
// const CryptoJS = require('crypto-js');
// const AES = require("crypto-js/aes");
// const session = require('express-session');
// const { errorResponse, successResponse } = require('../helpers');
// const percentageController = require("../controller/percentage.controller");
// const referralsController = require("../controller/referrals.controller");
// const { authController } = require('../controller');
const authRoute = require("./auth.route");
var router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'VR Airdrop' });
});


module.exports = router;