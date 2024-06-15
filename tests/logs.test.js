const request = require('supertest');
const app = require('../app');

describe('Logs API', () => {
    it('Should return logs', async () => {
        let response = await request(app).get('/api/logs');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('Should return logs filtered by date', async () => {
        const startDate = '2024-06-01';
        const endDate = '2024-06-30';

        let response = await request(app).get(`/api/logs?startDate=${startDate}&endDate=${endDate}`);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('Should not return logs', async () => {
        const startDate = '2024-06-01';
        const endDate = '';

        let response = await request(app).get(`/api/logs?startDate=${startDate}&endDate=${endDate}`);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ "error": "Inserir \"Data de Inicio\" e \"Data de Final\"." });
    });

    it('Should not return logs', async () => {
        const startDate = '';
        const endDate = '2024-06-30';

        let response = await request(app).get(`/api/logs?startDate=${startDate}&endDate=${endDate}`);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ "error": "Inserir \"Data de Inicio\" e \"Data de Final\"." });
    });
});