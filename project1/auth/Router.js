const express = require("express");
const Router = express.Router();
const ctrl =require("./Controller");

Router.route("/").get(ctrl.home);

Router.route("/about").get(ctrl.about);

Router.route("/contact").get(ctrl.contact)

Router.route("/login").post(ctrl.login)

Router.route("/signin").post(ctrl.signup)

module.exports= Router;