let database = [

    {
        id: 1,
        name: "Alex",
        username: "Alex",
        password: "a",
    },

    {
        id: 2,
        name: "Steven",
        username: "Steven",
        password: "s",
    }
];


const userModel = {
    findOne: (username) => {
        for (const person of database) {
            if (person.username === username) {
                return person
            }
        }
        //TODO: redirect user to registration if user not found
        return null;
    },
    findById: (id) => {
        for (const person of database) {
            if (person.id === id) {
                return person
            }
        }
        //TODO: same thing as findOne
        return null;
    },

    findOrAddGoogleUser: (id, name, googleUsername) => {
        const user = database.find((user) => user.googleUsername === googleUsername);
        if (user) {

            return user;
        }
        const newUser = { id: id, name: name, googleUsername: googleUsername }
        database.push(newUser);
        return newUser;
    },
};

module.exports = { userModel };