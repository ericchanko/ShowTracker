const userModel = require("../sqlite_users").userModel;


const getUserByUsernameAndPassword = (username, password) => {
    let user = userModel.get_user(username); // gives a statement ->
    //{ USR_username: 'a', USR_name: 'Alex', USR_passwords: 'a' }
    if (user) {
        if (isUserValid(user, password)) {
            return user;
        }
    }
    console.log("somethign went wrong");
    return null;
};
const getUserById = (id) => {
    let user = userModel.findById(id);
    console.log(user);
    if (user) {
        return user;
    }
    return null;
};

function isUserValid(user, password) {
    return user.USR_passwords === password;
}

const getGoogleUserByUsername = (id, name, googleUsername) => {
    let user = userModel.findOrAddGoogleUser(id, name, googleUsername);
    if (user) {
        return user;
    } else {
        return null;
    }
};

module.exports = {
    getUserByUsernameAndPassword,
    getUserById,
    getGoogleUserByUsername
};
