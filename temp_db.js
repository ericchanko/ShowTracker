const userModel = {
    find_user = (username) => {
        try {
            let statement = db.prepare('SELECT USR_username, USR_name FROM users WHERE USR_username = ?').get(username);
            return statement.USR_name;
        } catch (TypeError) {
            return null;
        }

    },
    get_user_by_id = (user_id) => {
        try {
            let statement = db.prepare(`SELECT * FROM users WHERE USR_ID = ?`).get(user_id);
            return statement.USR_username;
        } catch (TypeError) {
            return null;
        }

    },

    find_user_by_gmail = (gmail_acc) => {
        try {
            let statement = db.prepare('SELECT USR_GMAIL, USR_name FROM users WHERE USR_GMAIL = ?').get(gmail_acc);
            return statement.USR_name;
        } catch (TypeError) {
            return 'Error: gmail account not found in Database.';
        }
    },
};

module.exports = { userModel };