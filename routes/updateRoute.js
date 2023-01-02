const router = require('express').Router();
const {updateCoins,updateTime} = require('../controller/updateCOntroller.js')


router.route('/coin/:email/:val').post(updateCoins)

router.route('/time/:email/:val/:date').post(updateTime)


module.exports = router;