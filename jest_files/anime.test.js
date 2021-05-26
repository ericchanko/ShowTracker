// //Anime//
// const add_anime = require('../model/anime_model').add_anime;
// const remove_anime = require('../model/anime_model').remove_anime;


// test('Adds anime, fail case', () => {
//     expect(add_anime('Yahari Ore no Seishun Love Comedy wa Machigatteiru', 'test', 'test')).toBeNull();
// });

// test('Adds anime, pass case', () => {
//     expect(add_anime('Zoruto', 'test', 'test')).toBeNull();
// });

// test('removes anime. pass case.', () => {
//     expect(remove_anime(51)).toBeNull();
// });

// test('removes anime. fail case.', () => {
//     expect(remove_anime(51)).toBeNull();
// });

//New unit testing

const { TestScheduler } = require('@jest/core');
const anime_model = require('../model/anime_model');

test('Fetches for an anime with an ID of 32 PASS case', () => {
    expect(anime_model.fetch_animes(56)).toEqual([{
        ANI_ID: 56,
        ANI_title: 'Naruto',
        ANI_desc: 'A shinobi ninja',
        ANI_pic: 'test',
        anime_background_url: null,
        anime_full_desc: null,
        num_Episodes: 12,
    }]);
})

test('Fetches for an anime with an ID of 324 FAIL case', () => {
    expect(anime_model.fetch_animes(324)).toEqual([]);
})

// test('Fetch user anime list', () => {
//     expect(anime_model.fetch_user_anime_list(1)).toEqual([]);
// })

test('Fetches user\'s anime list, index 0 PASS case', () => {
    expect(anime_model.fetch_user_anime_list(1)[0]).toEqual({
        ANI_title: 'Boku no Hero Academia',
        ANI_pic: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png',
        ANI_desc: 'My Hero Academia',
        watch_status: 1,
        watched_Episodes: 1,
        date_Added: '04.May.2021'
    });
});

test('Fetches user\'s anime list, index 0 FAIL case', () => {
    expect(anime_model.fetch_user_anime_list(1000)[0]).not.toBeDefined();
});


test('Get\'s anime info based on title PASS CASE', () => {
    expect(anime_model.get_anime_by_title('Naruto')).toEqual({ ANI_ID: 56 });
});


test('Get\'s anime info based on title FAIL case', () => {
    expect(anime_model.get_anime_by_title('Overflow')).not.toBeDefined();
});

test('Retrieves anime\'s info based on name PASS case', () => {
    expect(anime_model.retrieve_anime_by_name('Naruto')).toEqual({
        ANI_ID: 56,
        ANI_title: 'Naruto',
        ANI_desc: 'A shinobi ninja',
        ANI_pic: 'test',
        anime_background_url: null,
        anime_full_desc: null,
        num_Episodes: 12,
    })
});

test('Retrieves anime\'s info based on name FAIL case', () => {
    expect(anime_model.retrieve_anime_by_name('Pepega')).not.toBeDefined();
});

// UNCOMMENT THIS WHEN DEMO

// test('Add\'s anime to a user\'s list PASS CASE', () => {
//     expect(anime_model.add_to_userlist(56, 4, '08.May.2021')).toBe("Added anime to user's watchlist");
// });

test('Add\'s anime to a user\'s list FAIL CASE', () => {
    expect(anime_model.add_to_userlist(22, 4, '08.May.2021')).toBeNull();
});