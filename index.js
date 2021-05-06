const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");

app.use(express.static(path.join(__dirname, "public")));

const authController = require("./controller/auth_controller");
const animeController = require("./controller/anime_controller");
const passport = require("./middleware/passport");
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);

app.use(passport.initialize());

app.use(passport.session());

app.use(ejsLayouts);

app.set("view engine", "ejs");


// Routes

app.get("/", (req, res) => res.send("Hello World. This page is currently under development!"));

app.get("/animelist", animeController.list);

app.get("/login", authController.login);
app.post("/login", authController.loginSubmit);

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/animelist');
    });
app.post('/auth/google', authController.googleSubmit);

app.listen(3000, function() {
    console.log(
        "Server running. Visit: localhost:3000"
    );
});