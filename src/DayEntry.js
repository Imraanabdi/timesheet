import React, { useState } from 'react';

const DayEntry = ({ addDay }) => {
    const [employeeName, setEmployeeName] = useState('');
    const [workHours, setWorkHours] = useState('');
    const [breakHours, setBreakHours] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const workedHours = workHours - breakHours;
        addDay({ employeeName, workHours, breakHours, workedHours });
        setEmployeeName('');
        setWorkHours('');
        setBreakHours('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Employee Name: </label>
                <input 
                    type="text" 
                    value={employeeName} 
                    onChange={(e) => setEmployeeName(e.target.value)} 
                />
            </div>
            <div>
                <label>Work Hours: </label>
                <input 
                    type="number" 
                    value={workHours} 
                    onChange={(e) => setWorkHours(e.target.value)} 
                />
            </div>
            <div>
                <label>Break Hours: </label>
                <input 
                    type="number" 
                    value={breakHours} 
                    onChange={(e) => setBreakHours(e.target.value)} 
                />
            </div>
            <button type="submit">Add Day</button>
        </form>
    );
};

export default DayEntry;
