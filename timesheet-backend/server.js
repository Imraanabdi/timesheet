const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 5000;

app.use(cors()); // Ensure this is correctly configured
app.use(express.json());

// Routes
app.post('/api/day-entries', (req, res) => {
  const { employeeName, projectName, activityDescription, workHours, breakHours, date } = req.body;
  const workedHours = workHours - breakHours;
  const workPercentage = (workedHours / workHours) * 100;

  const query = `
    INSERT INTO day_entries (employeeName, projectName, activityDescription, workHours, breakHours, workedHours, workPercentage, date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [employeeName, projectName, activityDescription, workHours, breakHours, workedHours, workPercentage, date];

  db.run(query, params, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, ...req.body, workedHours, workPercentage });
  });
});

app.get('/api/day-entries', (req, res) => {
  const query = 'SELECT * FROM day_entries';

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
