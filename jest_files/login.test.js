//user and password method
const user_and_pass = require('../controller/user_controller').getUserByUsernameAndPassword;

//User and password method invalid
test('Logins with the incorrect login info', () => {
    expect(user_and_pass('Alex', 'incorrectPassword')).toBeNull();
});

//User and password method valid
test('Logins with the correct login info', () => {
    expect(user_and_pass('Alex', 'a')).not.toBeUndefined();
});

//Find user by ID 
const user_by_id = require('../controller/user_controller').getUserById;
//Finds user by ID valid
test('getting user by ID', () => {
    expect(user_by_id(1).name).toBe('Alex');
});

//Finds user by ID invalid
test('Inputting invalid ID', () => {
    expect(user_by_id(100)).toBeNull();
});

//Google login method
const google_login = require('../controller/user_controller').getGoogleUserByUsername;

//Logins with google valid
test('Logins with google account', () => {
    expect(google_login('1', 'Alex', 'mockup')).not.toBeUndefined();
});