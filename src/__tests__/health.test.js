'use strict';

const request = require('supertest');
const app = require('../index');

describe('GET /health', () => {
  it('returns 200 with status healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'healthy' });
  });
});

describe('GET /', () => {
  it('returns 200 with status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
