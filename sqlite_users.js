const { copyFileSync } = require('fs');

const userModel = {

    findById: (user_id) => {
        const db = require('better-sqlite3')('./database/anime_watchlist.db');

        try {
            let statement = db.prepare(`SELECT * FROM users WHERE USR_ID = ?`).get(user_id);
            return statement.USR_username;
        } catch (TypeError) {
            return null;
        }
    },

    add_user:  (user_name, user_username, user_password, user_gmail) => {
        const db = require('better-sqlite3')('./database/anime_watchlist.db');
        let insert = db.prepare(`INSERT INTO users (USR_ID, USR_name, USR_username, USR_passwords, USR_GMAIL) VALUES(NULL, ?, ?, ?,?)`);
        insert.run(user_name, user_username, user_password, user_gmail);
        db.close();
    },

    list_users: () => {
        const db = require('better-sqlite3')('./database/anime_watchlist.db');
        let statement = db.prepare('SELECT * FROM users').all();
        return statement;

    },

    get_user: (username) => {
        const db = require('better-sqlite3')('./database/anime_watchlist.db');
        try {
            let statement = db.prepare('SELECT USR_ID, USR_username, USR_name, USR_passwords FROM users WHERE USR_username = ?').get(username);
            return statement
        } catch (TypeError) {
            return null;
        }
    },

    find_user_by_gmail: (gmail_acc) => {
        const db = require('better-sqlite3')('./database/anime_watchlist.db');
        try {
            let statement = db.prepare('SELECT USR_GMAIL, USR_name FROM users WHERE USR_GMAIL = ?').get(gmail_acc);
            return statement.USR_name;
        } catch (TypeError) {
            return null;
        }
    },
};

module.exports = {
    userModel
};
