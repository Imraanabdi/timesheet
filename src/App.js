import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DayEntry from './DayEntry'; // Adjust the import path as necessary
import styled from 'styled-components';
import Navbar from './Navbar'; // Adjust the import path as necessary

const AppContainer = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #343a40;
`;

const Subtitle = styled.h2`
  margin-top: 40px;
  color: #495057;
`;

const EntriesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f1f1f1;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const App = () => {
  const [days, setDays] = useState([]);

  const addDay = (day) => {
    setDays([...days, day]);
  };

  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Title>Timesheet</Title>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DayEntry addDay={addDay} />
                <Subtitle>Entries</Subtitle>
                <EntriesTable>
                  <thead>
                    <TableRow>
                      <TableHead>Employee Name</TableHead>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Activity Description</TableHead>
                      <TableHead>Work Hours</TableHead>
                      <TableHead>Break Hours</TableHead>
                      <TableHead>Worked Hours</TableHead>
                      <TableHead>Work Percentage</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </thead>
                  <tbody>
                    {days.map((day, index) => (
                      <TableRow key={index}>
                        <TableCell>{day.employeeName}</TableCell>
                        <TableCell>{day.projectName}</TableCell>
                        <TableCell>{day.activityDescription}</TableCell>
                        <TableCell>{day.workHours}</TableCell>
                        <TableCell>{day.breakHours}</TableCell>
                        <TableCell>{day.workedHours}</TableCell>
                        <TableCell>{day.workPercentage.toFixed(2)}%</TableCell>
                        <TableCell>{new Date(day.date).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </EntriesTable>
              </>
            }
          />
          <Route
            path="/timesheet-history"
            element={
              <>
                <Subtitle>Timesheet History</Subtitle>
                <EntriesTable>
                  <thead>
                    <TableRow>
                      <TableHead>Employee Name</TableHead>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Activity Description</TableHead>
                      <TableHead>Work Hours</TableHead>
                      <TableHead>Break Hours</TableHead>
                      <TableHead>Worked Hours</TableHead>
                      <TableHead>Work Percentage</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </thead>
                  <tbody>
                    {days.map((day, index) => (
                      <TableRow key={index}>
                        <TableCell>{day.employeeName}</TableCell>
                        <TableCell>{day.projectName}</TableCell>
                        <TableCell>{day.activityDescription}</TableCell>
                        <TableCell>{day.workHours}</TableCell>
                        <TableCell>{day.breakHours}</TableCell>
                        <TableCell>{day.workedHours}</TableCell>
                        <TableCell>{day.workPercentage.toFixed(2)}%</TableCell>
                        <TableCell>{new Date(day.date).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </EntriesTable>
              </>
            }
          />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
