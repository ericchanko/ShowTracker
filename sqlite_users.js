const db = require('better-sqlite3')('./database/users.db');

let get_user_by_id = (user_id) => {
    try {
        let statement = db.prepare(`SELECT * FROM users WHERE USR_ID = ?`).get(user_id);
        return statement.USR_username;
    } catch (TypeError) {
        return null;
    }

};

let add_user = (user_name, user_username, user_password, user_gmail) => {

    let insert = db.prepare(`INSERT INTO users (USR_ID, USR_name, USR_username, USR_passwords, USR_GMAIL) VALUES(NULL, ?, ?, ?,?)`);
    insert.run(user_name, user_username, user_password, user_gmail);
}
let list_users = () => {
    let statement = db.prepare('SELECT * FROM users').all();
    return statement;
}

let find_user = (username) => {
    try {
        let statement = db.prepare('SELECT USR_username, USR_name FROM users WHERE USR_username = ?').get(username);
        return statement.USR_name;
    } catch (TypeError) {
        return null;
    }

}

let find_user_by_gmail = (gmail_acc) => {
    try {
        let statement = db.prepare('SELECT USR_GMAIL, USR_name FROM users WHERE USR_GMAIL = ?').get(gmail_acc);
        return statement.USR_name;
    } catch (TypeError) {
        return 'Error: gmail account not found in Database.';
    }
}

db.close();

module.exports = {
    get_user_by_id,
    add_user,
    list_users,
    find_user,
    find_user_by_gmail,
}