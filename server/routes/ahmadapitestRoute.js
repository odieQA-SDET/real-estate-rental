const express = require('express');
const { getSmartContractInfo } = require('../controllers/ahmadapitestController');

const router = express.Router();

router.route('/ahmadapitest').get(getSmartContractInfo);

module.exports = router;
