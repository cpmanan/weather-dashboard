import request from 'supertest';
import handler from '../../src/app/api/feature/route';
import { createMocks } from 'node-mocks-http';

describe('Weather API', () => {
  it('should return weather data for a valid city', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        city: 'London'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.ok).toBe(true);
    expect(data.feature).toBe('weather');
    expect(data.city).toBe('London');
    expect(data.temperature).toBeDefined();
    expect(data.condition).toBeDefined();
  });

  it('should return an error for an invalid city name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        city: ''
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData());
    expect(data.ok).toBe(false);
    expect(data.feature).toBe('weather');
    expect(data.error).toBe('Invalid city name');
  });
});
