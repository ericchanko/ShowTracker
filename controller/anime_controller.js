

const animeModel = require("../model/anime_model");

let animeController = {
    list: (req, res) => {
        res.render("anime/list", {userAnimes: animeModel.fetch_user_animes(req.user.USR_ID)} );
    },

    home: (req, res) => {
        res.render("anime/index")
    },

    listing: (req, res) => {
        //let animeobject=animeModel.fetch_animes(1);
        //console.log(animeobject);
        res.render("anime/listing");
    }
};

module.exports = animeController;