const { add_user } = require('./user_model');

const db = require('better-sqlite3')('./database/anime_watchlist.db');

let list_anime = () => {
    let statement = db.prepare('SELECT * FROM anime').all();
    return statement;
};

let add_anime = (anime_title, anime_desc, anime_pic) => {
    let get_anime_by_title = (anime_title) => {
        let statement = db.prepare(`SELECT ANI_ID FROM ANIME WHERE ANI_title = ?`).get(anime_title);
        return statement;
    }
    try {
        let insert = db.prepare(`INSERT INTO anime (ANI_ID, ANI_title, ANI_desc, ANI_pic) VALUES(NULL, ?, ?, ?)`);
        insert.run(anime_title, anime_desc, anime_pic);
        console.log(get_anime_by_title(anime_title));
        return 'Anime added successfully';
    } catch (SqliteError) {
        return null;
    }
};

let retrieve_anime_by_name = (anime_title) => {
    let statement = db.prepare('SELECT * FROM anime where ANI_title = ?').get(anime_title);
    return statement;
}

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


// console.log(fetch_user_animes('abc'));
//console.log(list_anime());
// console.log(add_anime('Faruto', 'A ninja', 'https://google.com/'));
// console.log(get_anime_by_title('Yahari Ore no Seishun Love Comedy wa Machigatteiru'));
// console.log(retrieve_anime_by_name('Plunderer'));

module.exports = {
    list_anime,
    add_anime,
    remove_anime,
    fetch_user_animes,
    retrieve_anime_by_name
};