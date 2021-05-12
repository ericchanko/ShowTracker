const userModel = require("../temp_db").userModel;


const getUserByUsernameAndPassword = (username, password) => {
    let user = userModel.findOne(username);
    if (user) {
        if (isUserValid(user, password)) {
            return user;
        }
    }
    return null;
};
const getUserById = (id) => {
    let user = userModel.findById(id);
    if (user) {
        return user;
    }
    return null;
};

function isUserValid(user, password) {
    return user.password === password;
}

const getGoogleUserByUsername = (id, name, googleUsername) => {
    let user = userModel.findOrAddGoogleUser(id, name, googleUsername)
    if (user) {
        return user;
    } else {
        return null;
    }
}

module.exports = {
    getUserByUsernameAndPassword,
    getUserById,
    getGoogleUserByUsername
};
