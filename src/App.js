import React, { useState } from 'react';
import TimesheetForm from './TimesheetForm';
import TimesheetHistory from './TimesheetHistory';
import Navbar from './Navbar';

const App = () => {
    const [timesheetData, setTimesheetData] = useState([]);

    const addEntry = (entry) => {
        setTimesheetData([...timesheetData, entry]);
    };

    return (
        <div>
            <Navbar />
            <div id="home">
                <h1>Timesheet Application</h1>
            </div>
            <div id="add-entry">
                <TimesheetForm addEntry={addEntry} />
            </div>
            <div id="history">
                <TimesheetHistory data={timesheetData} />
            </div>
        </div>
    );
};

export default App;
