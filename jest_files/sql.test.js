const login_db = require('../sqlite_users').get_user_by_id;

test('Retrives username based on id.', () => {
    expect(login_db(1)).toBe('aamog');
});