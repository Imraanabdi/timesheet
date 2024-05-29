import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Timesheet from './Timesheet';
import TimesheetHistory from './TimesheetHistory';

function App() {
    const [days, setDays] = useState([]);
    
    const addDay = (day) => {
        setDays([...days, day]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/timesheet" element={<Timesheet addDay={addDay} days={days} />} />
                    <Route path="/history" element={<TimesheetHistory days={days} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
