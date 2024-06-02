import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './Navbar';
import DayEntry from './DayEntry';
import Summary from './Summary';
import TimesheetHistory from './TimesheetHistory';

const AppContainer = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #343a40;
`;

const App = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/day-entries');
        setDays(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addDay = async (day) => {
    const result = await axios.post('http://localhost:5000/api/day-entries', day);
    setDays([...days, result.data]);
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
                <Summary data={days} />
              </>
            }
          />
          <Route
            path="/timesheet-history"
            element={<TimesheetHistory data={days} />}
          />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
