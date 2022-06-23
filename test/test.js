const request = require('supertest');
const app = require('../app');

test('User Profile API...', async () => {
    const res = await request(app)
        .get('/api/beers')

    expect(res.statusCode).toBe(200);
});