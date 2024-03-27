var express = require('express');
var async = require('async');
const login = require('./../models/login');
const CryptoJS = require('crypto-js');
const AES = require("crypto-js/aes");
const session = require('express-session');
const { errorResponse, successResponse } = require('../helpers');
const percentageController = require("../controller/percentage.controller");
const referralsController = require("../controller/referrals.controller");
const { authController } = require('../controller');

var router = express.Router();


router.post('/register', authController.register);


router.post('/getpercent',async(req,res) => {
  async.parallel({
    login: function(cb) {
      login.find({useraddress:req.body.useraddress}).exec(cb)
    }
  }, function(err,results) {
      res.json(results);
  })
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'D Airdrop' });
});

router.put('/update-percentage', percentageController.updatePercentage);
router.post('/single-percentage', percentageController.findGetOnePercentage);
router.post('/create-refer', referralsController.createRefer);
router.get('/refers', referralsController.getAllRefer);
router.get('/single-refer', referralsController.getSingleRefer);
router.post('/gain-refer-percentage', referralsController.updateRefers);
router.get('/referAddress', referralsController.getFilterRefer);
router.post('/get-refers', referralsController.getReferDetail);
module.exports = router;