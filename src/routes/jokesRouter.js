const express = require('express');
const { randomJoke, textSearch } = require('../controllers/chuckNorrisController');
const router = express.Router();

/**
 * @swagger
 * /api/jokes/random:
 *   get:
 *     summary: Busca uma piada aleatória de Chuck Norris
 *     responses:
 *       200:
 *         description: Uma piada aleatória de Chuck Norris
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 joke:
 *                   type: string
 *                   example: Chuck Norris is the only person on earth who can 'chuckle'.
 */
router.get('/random', randomJoke);

/**
 * @swagger
 * /api/jokes/search:
 *   get:
 *     summary: Procura piadas de Chuck Norris
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: O termo de pesquisa
 *     responses:
 *       200:
 *         description: Uma piadas de Chuck Norris
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   joke:
 *                     type: string
 *                     example: Chuck Norris bathroom shower is equipped with with automatic Tazer guns that provide him with that calm, fresh, relaxed feeling before each new day of face punching old ladies delaying traffic in crosswalks.
 */
router.get('/search', textSearch);

module.exports = router;