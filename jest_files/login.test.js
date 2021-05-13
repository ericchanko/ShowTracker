// // Old Code.
// // user and password method
// const sqlite_user = require('../sqlite_users').get_user_by_id;

// // User and password method invalid
// test('Finds the user based on USR_ID', () => {
//     expect(sqlite_user(1)).toBe('aamog');
// });

// test('Finds the user based on USR_ID (incorrectly)', () => {
//     expect(sqlite_user(100)).toBeNull();
// });


// // console.log(user_and_pass(1));

// //User and password method valid
// test('Logins with the correct login info', () => {
//     expect(user_and_pass('Alex', 'a')).not.toBeUndefined();
// });

//Test Driven Development//

//Users//
const find_user_by_id = require('../sqlite_users').get_user_by_id;

test('Retrives username based on id.', () => {
    expect(find_user_by_id(1)).toBe('aamog');
});

test('Retrieves username based on id (Fail on purpose)', () => {
    expect(find_user_by_id(100)).toBeNull();
});

