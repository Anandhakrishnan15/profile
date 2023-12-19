const express = require('express')
const router = express.Router();
const conteroler = require ("./controller")

router.route('/').get(conteroler.home)

router.route('/reg').post(conteroler.reg)

<<<<<<< HEAD
router.route('/login').post(conteroler.login)
=======
router.route('/login').get(conteroler.login)
>>>>>>> 59ee2d71d5fc6a3fd55da8f0679a9ab79bf0191b

router.route('/about').get(conteroler.about)

router.route('/contact').get(conteroler.contact)


module.exports = router;