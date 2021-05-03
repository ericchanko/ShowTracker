const express = require("express");
const app = express();
const path = require("path");

// modules
const authController = require("./controller/auth_controller");


app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("Hello World. This page is currently under development!"));
app.get("/login", authController.login);



app.listen(3000, function() {
    console.log(
        "Server running. Visit: localhost:3000"
    );
});
