const request = require('supertest');
const app = require('../app');
const News = require('../models/News');
require('../models');

let token;
let id;

beforeAll(async () => {
  const credentials = {
    email: "test@gmail.com",
    password: "test1234",
  }
  const res = await request(app).post('/users/login').send(credentials);
  token = res.body.token;
});

test('GET /favorites', async () => {
  const res = await request(app)
    .get('/favorites')
    .set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test('POST /favorites', async () => {
  const news = await News.create({
    headline: 'test headline',
    lead: 'test lead',
    author: 'test author',
    imageDescription: 'test imageDescription',
    date: '2024-01-23',
    body: 'test body',
  });
  const favorite = {
    rate: 5,
    newsId: news.id,
  }
  const res = await request(app)
    .post('/favorites')
    .send(favorite)
    .set('Authorization', `Bearer ${token}`);
  id = res.body.id;
  await news.destroy();
  expect(res.status).toBe(201);
  expect(res.body.rate).toBe(favorite.rate);
  expect(res.body.id).toBeDefined();
});

test('DELETE /favorites/:id', async () => {
  const res = await request(app)
    .delete(`/favorites/${id}`)
    .set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(204);
});
