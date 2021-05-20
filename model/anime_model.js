const { add_user } = require('./user_model');

const db = require('better-sqlite3')('./database/anime_watchlist.db');

let list_anime = () => {
    let statement = db.prepare('SELECT * FROM anime').all();
    return statement;
};

let add_anime = (anime_title, anime_desc, anime_pic) => {
    try {
        let insert = db.prepare(`INSERT INTO anime (ANI_ID, ANI_title, ANI_desc, ANI_pic) VALUES(NULL, ?, ?, ?)`);
        insert.run(anime_title, anime_desc, anime_pic);
        console.log('Anime added successfully to list');
        return get_anime_by_title(anime_title);
    } catch (SqliteError) {
        return null;
    }
};

let retrieve_anime_by_name = (anime_title) => {
    let statement = db.prepare('SELECT * FROM anime where ANI_title = ?').get(anime_title);
    return statement;
};

let remove_anime = (anime_id) => {
    let statement = db.prepare(`DELETE FROM anime WHERE ANI_ID = ? `);
    if (statement.run(anime_id).changes == 1) {
        return 'Anime removed.'
    } else {
        return null;
    }
};
let fetch_user_animes = (USR_ID) => {
    try {
        let statement = db.prepare(`Select Anime_List.USR_ID,anime.ANI_ID,anime.ANI_title,anime.ANI_desc,anime.ANI_pic from anime inner join Anime_List on Anime_List.ANI_ID = anime.ANI_ID where Anime_List.USR_ID = ${USR_ID} `).all();
        return statement;
    } catch (ReferenceError) { return null; }
};
let fetch_animes = (ANI_ID) => {
    try {
        let statement = db.prepare(`SELECT * FROM anime where Anime.ANI_ID = ${ANI_ID} `).all();
        return statement;
    } catch (ReferenceError) { return null; }

};

let fetch_user_anime_list = (USR_ID) => {
    try {
        let statement = db.prepare(`Select anime.ANI_title,anime.ANI_pic, anime.ANI_desc,Anime_List.watch_status, Anime_List.watched_Episodes,Anime_List.date_Added from Anime_List inner join anime on Anime_List.ANI_ID = anime.ANI_ID where USR_ID = ${USR_ID}`).all();
        return statement;
    }
    catch (ReferenceError){return null;}
};


//console.log(fetch_animes(1)[0].anime_background_url);
//console.log(list_anime());
//add_anime('Naruto', 'A ninja', 'https://google.com/');
let get_anime_by_title = (anime_title) => {
    let statement = db.prepare(`SELECT ANI_ID FROM ANIME WHERE ANI_title = ?`).get(anime_title);
    return statement;
};

let add_to_userlist = (animeID, userID, date) => {
    try {
        let insert = db.prepare(`Insert into Anime_List (USR_ID,ANI_ID,date_Added,watch_status,watched_Episodes) VALUES (?,?,?,?,?)`);
        insert.run(userID, animeID, date, 0, 0);
        return "Added anime to user's watchlist";
    }
    catch (SqliteError){
        return null;
    }
};

module.exports = {
    list_anime,
    add_anime,
    remove_anime,
    fetch_user_animes,
    fetch_animes,
    fetch_user_anime_list,
    retrieve_anime_by_name,
    add_to_userlist
};
