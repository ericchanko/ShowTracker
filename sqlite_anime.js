const db = require('better-sqlite3')('./database/anime.db');

let list_anime = () => {
    let statement = db.prepare('SELECT ANI_ID,ANI_title,ANI_desc FROM anime').all();
    return statement;
}


let add_anime = (anime_title, anime_desc, anime_pic) => {
    try {
        let insert = db.prepare(`INSERT INTO anime (ANI_ID, ANI_title, ANI_desc, ANI_pic) VALUES(NULL, ?, ?, ?)`);
        insert.run(anime_title, anime_desc, anime_pic);
        return 'Anime added successfully';
    } catch (SqliteError) {
        return null;
    }
}

let remove_anime = (anime_id) => {
    let statement = db.prepare(`DELETE FROM anime WHERE ANI_ID = ? `);
    if (statement.run(anime_id).changes == 1) {
        return 'Anime removed.'
    } else {
        return null;
    }


}

console.log(remove_anime(49));

module.exports = {
    list_anime,
    add_anime,
    remove_anime
}