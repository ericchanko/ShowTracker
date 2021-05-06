const passport = require("../middleware/passport");

let authController = {
    login: (req, res) => {
        res.render("auth/login");
    },

    loginSubmit: (req, res, next) => {
        passport.authenticate("local", {
          successRedirect: "/animelist",
          failureRedirect: "/login",
        })(req, res, next);
      },

    googleSubmit: (req, res, next) => {
        passport.authenticate("google", {
          successRedirect: "/animelist",
          failureRedirect: "/login",
        })(req, res, next);
    },
};

module.exports = authController;
