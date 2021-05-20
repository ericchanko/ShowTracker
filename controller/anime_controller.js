const animeModel = require("../model/anime_model");

let animeController = {
    list: (req, res) => {
        res.render("anime/list", {userAnimes: animeModel.fetch_user_animes(req.user.USR_ID)} );
    },

    home: (req, res) => {
        res.render("anime/index")
    },

    listing: (req, res) => {
        let animeID = req.params.id;
        res.render("anime/listing", {anime: animeModel.find_anime(Number(animeID))})
    }
};

module.exports = animeController;
