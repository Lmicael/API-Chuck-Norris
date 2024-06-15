const request = require('supertest');
const app = require('../app');

describe('Jokes API', () => {
    it('Should return a random joke', async () => {
        let response = await request(app).get('/api/jokes/random');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('joke');
    });

    it('Should return jokes based on search query', async () => {
        const query = 'car';

        let response = await request(app).get(`/api/jokes/search?query=${query}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('joke');
    });

    it('Should not return jokes based on search query', async () => {
        const query = '';

        let response = await request(app).get(`/api/jokes/search?query=${query}`);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ "error": "O parâmetro de consulta \"query\" é obrigatório." });
    });
});
