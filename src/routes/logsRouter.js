const express = require('express');
const { readLogs } = require('../controllers/logsController');
const router = express.Router();

/**
 * @swagger
 * /api/logs:
 *   get:
 *     summary: Recuperar logs de solicitações de API
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: A data de início da filtragem de registros (YYYY-MM-DD)
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: A data de término da filtragem de registros (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Uma lista de registros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   timestamp:
 *                     type: string
 *                     example: 2024-06-14 15:35:00
 *                   type:
 *                     type: string
 *                     example: search
 *                   query:
 *                     type: string
 *                     example: happy
 *                   joke:
 *                     type: string
 *                     example: Chuck Norris gets a happy ending when strangling mountain lions.
 */
router.get('/', readLogs);

module.exports = router;