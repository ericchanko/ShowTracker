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

//Test Driven Development
const find_user_by_id = require('../sqlite_users').get_user_by_id;

test('Retrives username based on id.', () => {
    expect(find_user_by_id(1)).toBe('aamog');
});

test('Retrieves username based on id (Fail on purpose)', () => {
    expect(find_user_by_id(100)).toBeNull();
});


const find_by_gmail = require('../sqlite_users').find_user_by_gmail;
test('Retrieves name based on gmail email', () => {
    expect(find_by_gmail('alexhong@gmail.com')).toBe('Alex Hong');
});

test('Retrieves name based on gmail email (Fail on purpose.)', () => {
    expect(find_by_gmail('alexhong@hmil.com')).toBeNull();
});

//Anime
const add_anime = require('../sqlite_anime').add_anime;
// test('add anime. SUpposed to fail', () => {
test('Adds anime, fail case', () => {
    expect(add_anime('Yahari Ore no Seishun Love Comedy wa Machigatteiru', 'test', 'test')).toBeNull();
});

test('Adds anime, pass case', () => {
    expect(add_anime('Zoruto', 'test', 'test')).toBe('Anime added successfully');
});


const remove_anime = require('../sqlite_anime').remove_anime;

test('removes anime. pass case.', () => {
    expect(remove_anime(49)).toBe('Anime removed.');
})

test('removes anime. fail case.', () => {
    expect(remove_anime(49)).toBeNull();
})