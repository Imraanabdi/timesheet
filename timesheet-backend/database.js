// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS day_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employeeName TEXT,
      projectName TEXT,
      activityDescription TEXT,
      workHours INTEGER,
      breakHours INTEGER,
      workedHours INTEGER,
      workPercentage REAL,
      date TEXT
    )
  `);
});

module.exports = db;
