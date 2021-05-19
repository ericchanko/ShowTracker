const animeModel = require("../model/anime_model");

let animeController = {
    list: (req, res) => {
        res.render("anime/list", {userAnimes: animeModel.fetch_user_animes(req.user.USR_ID)} );
    },

    home: (req, res) => {
        res.render("anime/index")
    },

    listing: (req, res) => {
        res.render("anime/listing")
    },

    add: (req, res) => {
        res.render("anime/new")
    },

    addSubmit: (req, res) => {
        let title = req.body.title;
        let desc = req.body.description;
        let img = req.body.image;

        console.log(req.user.USR_ID)


    }
};

module.exports = animeController;
