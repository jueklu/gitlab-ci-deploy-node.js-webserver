const request = require('supertest'); // Import Supertest to simulate HTTP requests
const { app } = require('../src/app'); // Import the app instance

describe('Basic Web Server Tests', () => {
  it('should return "Hi there." for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200); // Expect a 200 OK status
    expect(response.text).toBe('Hi there.\n'); // Expect the response body
  });

  it('should return JSON for GET /json', async () => {
    const response = await request(app).get('/json');
    expect(response.status).toBe(200); // Expect a 200 OK status
    expect(response.body).toEqual({ text: 'Hi there.', numbers: [1, 2, 3] }); // Expect the JSON response
  });

  it('should return 404 for an unknown route', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404); // Expect a 404 Not Found status
    expect(response.text).toContain('Not found'); // Check the custom 404 message
  });
});
