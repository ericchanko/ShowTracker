const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => res.send("Hello World. This page is currently under development!"));

app.listen(3000, function() {
    console.log(
        "Server running. Visit: localhost:3000"
    );
});
