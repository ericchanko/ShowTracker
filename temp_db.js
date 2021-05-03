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
        throw new Error(`Couldn't find user with username: ${username}`)
    },
    findById: (id) => {
        for (const person of database) {
            if (person.id === id) {
                return person
            }
        }
        if (user) {
            return user;
        }
        //TODO: same thing as findOne
        throw new Error(`Couldn't find user with id: ${id}`);
    },
};

module.exports = { userModel };