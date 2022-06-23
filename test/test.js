const request = require('supertest');
const app = require('../app');

//Routes
test('Route beers API...', async () => {
    const res = await request(app)
        .get('/api/beers')

    expect(res.statusCode).toBe(200);
});

test('Route Breweries API...', async () => {
    const res = await request(app)
        .get('/api/breweries')

    expect(res.statusCode).toBe(200);
});

test('Route Formats API...', async () => {
    const res = await request(app)
        .get('/api/formats')

    expect(res.statusCode).toBe(200);
});
