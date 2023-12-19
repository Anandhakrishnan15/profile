const express = require('express')
const router = express.Router();
const conteroler = require ("./controller")

router.route('/').get(conteroler.home)

router.route('/reg').post(conteroler.reg)

router.route('/login').post(conteroler.login)

router.route('/about').get(conteroler.about)

router.route('/contact').get(conteroler.contact)


module.exports = router;