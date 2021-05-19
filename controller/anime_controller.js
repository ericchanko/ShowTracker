const animeModel = require("../model/anime_model");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


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

        let now = new Date();
        let yyyy = now.getFullYear();
        let mm = now.getMonth();
        let dd = now.getDate();
        if (dd < 10){ dd='0'+dd }
        let today = months[mm]+" "+dd+", "+yyyy;

        // check if anime exists first
        let aniID = animeModel.retrieve_anime_by_name(title).ANI_ID;
        if (aniID) {
            console.log("anime already exists", aniID);
            animeModel.add_to_userlist(aniID, req.user.USR_ID, today);
        }
        else {
            let aniID = animeModel.add_anime(title, desc, img);
            console.log("This is new anime ID", aniID);
            animeModel.add_to_userlist(aniID, req.user.USR_ID,  today);
        }
        console.log(animeModel.fetch_user_animes(req.user.USR_ID));
        res.render("anime/list", {userAnimes: animeModel.fetch_user_animes(req.user.USR_ID)});
    }
};

module.exports = animeController;
