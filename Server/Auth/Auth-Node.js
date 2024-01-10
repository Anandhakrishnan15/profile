const express = require('express')
const router = express.Router();
const conteroler = require("./controller")
const contact = require("./contactController")
const validater = require("../Middleware-validater/reg_validater");
const signUpVAlidater = require("../zod-validater/registerZodValidater")
const loginValidater = require("../zod-validater/loginZodValidater")
const contactVlidater = require ("../zod-validater/contact-validater")
const userDataMiddleware = require("../Middleware-validater/userDataMiddleware")

router.route('/').get(conteroler.home)

router.route('/reg').post(validater(signUpVAlidater), conteroler.reg)

router.route('/login').post(validater(loginValidater), conteroler.login)

router.route('/about').get(conteroler.about)

router.route('/contact').post(validater(contactVlidater),contact)
router.route('/user').get(userDataMiddleware,conteroler.user)


module.exports = router;