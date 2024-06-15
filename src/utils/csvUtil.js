const { createObjectCsvWriter } = require('csv-writer');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const LOGS_DIR = path.join(__dirname, '../logs');
const CSV_FILE = path.join(LOGS_DIR, 'api_logs.csv');

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR);
}

const csvWriter = createObjectCsvWriter({
  path: CSV_FILE,
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'type', title: 'Type' },
    { id: 'query', title: 'Query' },
    { id: 'joke', title: 'Joke' },
  ],
  append: true,
});

function writeToCsv(type, query, joke) {
  let timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  let record = { timestamp, type, query, joke };

  csvWriter.writeRecords([record]).catch(err => {
    console.error('Error writing to CSV:', err);
  });
}

async function readLogsCsv(startDate, endDate) {
  try {
    let logsData = await fs.promises.readFile(CSV_FILE, 'utf-8');

    if (!logsData.trim()) {
      return { message: 'Nenhum registro de Log disponível' };
    }

    let logs = logsData.split('\n').filter(Boolean).map(line => {
      let [timestamp, type, query, joke] = line.split(',');
      return { timestamp, type, query, joke };
    });

    if (startDate && endDate) {
      logs = logs.filter(log => {
        let logDate = moment(log.timestamp, 'YYYY-MM-DD HH:mm:ss');
        return logDate.isBetween(startDate, endDate);
      });
    }
    return logs;
  }
  catch (err) {
    throw new Error('Error reading logs');
  }
}

module.exports = { writeToCsv, readLogsCsv };