const express = require('express');
const { swaggerUi, specs } = require('./swaggerConfig');
const jokesRouter = require('./src/routes/jokesRouter');
const logsRouter = require('./src/routes/logsRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/jokes', jokesRouter);
app.use('/api/logs', logsRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;