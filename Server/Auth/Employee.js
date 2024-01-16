const express = require("express")
const router = express.Router()
const Empl = require("./empController")

router.route("/employess").get(Empl)

module.exports = router