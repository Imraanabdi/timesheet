import React from 'react';

const Summary = ({ days }) => {
    const totalWorkedHours = days.reduce((acc, day) => acc + day.workedHours, 0);
    
    return (
        <div>
            <h2>Summary</h2>
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
            <h3>Total Worked Hours: {totalWorkedHours}h</h3>
        </div>
    );
};

export default Summary;
