import React from 'react';

const TimesheetHistory = ({ days }) => {
    return (
        <div>
            <h1>Timesheet History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Work Hours</th>
                        <th>Break Hours</th>
                        <th>Worked Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, index) => (
                        <tr key={index}>
                            <td>{day.employeeName}</td>
                            <td>{day.workHours}h</td>
                            <td>{day.breakHours}h</td>
                            <td>{day.workedHours}h</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimesheetHistory;
