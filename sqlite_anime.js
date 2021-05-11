const db = require('better-sqlite3')('./database/anime.db');

let list_anime = () => {
    let statement = db.prepare('SELECT * FROM animes').all();
    return statement;
}


let add_anime = (anime_title, anime_desc, anime_pic) => {
    let insert = db.prepare(`INSERT INTO animes (ANI_ID, ANI_title, ANI_desc, ANI_pic) VALUES(NULL, ?, ?, ?)`);
    insert.run(anime_title, anime_desc, anime_pic);
}

let remove_anime = (anime_id) => {
    let statement = db.prepare(`DELETE FROM animes WHERE ANI_ID = ? `);
    return statement.run(anime_id);
}

console.log(list_anime());

module.exports = {
    list_anime,
    add_anime,
    remove_anime
}