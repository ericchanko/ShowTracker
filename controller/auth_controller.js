const passport = require("../middleware/passport");
const userModel = require("../model/user_model").userModel;

let authController = {
    login: (req, res) => {
        res.render("auth/login");
    },

    loginSubmit: (req, res, next) => {
        passport.authenticate("local", {
          successRedirect: "/list",
          failureRedirect: "/login",
        })(req, res, next);
      },

    googleSubmit: (req, res, next) => {
        passport.authenticate("google", {
          successRedirect: "/list",
          failureRedirect: "/login",
        })(req, res, next);
    },

    register: (req, res) => {
        res.render("auth/register")
    },

    registerSubmit: (req, res, next) => {

        // temporary solution to non-enforcement of unqiue user ID's
        // ie we pray user doesnt get same userID as another
        let userID = Math.floor(Math.random() * 100000000001);
        userModel.add_user(userID, req.body.name, req.body.username, req.body.password);
        console.log("account successfully made");
        res.render("auth/login");
    },

    logout: (req, res) => {
        req.logout();
        res.redirect("/")
    }
};

module.exports = authController;
