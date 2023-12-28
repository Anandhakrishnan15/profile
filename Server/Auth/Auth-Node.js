const express = require('express')
const router = express.Router();
const conteroler = require ("./controller")
const validater = require("../Middleware-validater/reg_validater");
const signUpVAlidater = require("../zod-validater/registerZodValidater")
const loginValidater = require("../zod-validater/loginZodValidater")

router.route('/').get(conteroler.home)

router.route('/reg').post(validater(signUpVAlidater), conteroler.reg)

router.route('/login').post(validater(loginValidater),conteroler.login)

router.route('/about').get(conteroler.about)

router.route('/contact').get(conteroler.contact)


module.exports = router;