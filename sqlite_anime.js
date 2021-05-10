// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('./database/anime.db');

// let get_anime_list = () => {
//     db.each(`SELECT * FROM Anime_Shows`, function(err, row) {
//         console.log(`ID:${row.ANI_ID} Anime Name: ${row.ANI_Title} Anime DESC: ${row.ANI_Desc} Anime Pic: ${row.ANI_Pic}`);
//     });
// };

// let add_anime = (anime_title, anime_desc, anime_pic) => {
//     db.run('INSERT INTO Anime_Shows VALUES(NULL,?,?,?);', [anime_title, anime_desc, anime_pic], function(err) {
//         if (err) {
//             return err;
//         }
//     });
// };

// let remove_anime = (anime_id) => {
//     db.run(`DELETE FROM Anime_Shows WHERE ANI_ID = ${anime_id}`, function(err) {
//         if (err) {
//             return err;
//         };
//     });
// }


// add_anime('Naruto', 'Ninja', 'dwehfwjef');

// get_anime_list();

// db.close();

// module.exports = {
//     get_anime_list,
//     add_anime,
//     remove_anime
// };