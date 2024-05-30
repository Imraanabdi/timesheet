import React from 'react';

const MonthlySummary = ({ timesheetData }) => {
    // Function to group timesheet entries by month
    const groupByMonth = (entries) => {
        return entries.reduce((acc, entry) => {
            const month = entry.date.getMonth() + 1; // Get month (0-indexed)
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(entry);
            return acc;
        }, {});
    };

    // Generate a summary for each month
    const monthlySummaries = Object.entries(groupByMonth(timesheetData)).map(([month, entries]) => {
        const totalWorkedHours = entries.reduce((total, entry) => total + entry.workHours - entry.breakHours, 0);
        return (
            <div key={month}>
                <h3>Month: {month}</h3>
                <p>Total Worked Hours: {totalWorkedHours}</p>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>
                            {entry.employeeName} - {entry.projectName} - {entry.date.toLocaleDateString()} - {entry.workedHours} hours ({entry.workPercentage.toFixed(2)}%)
                        </li>
                    ))}
                </ul>
            </div>
        );
    });

    return (
        <div>
            <h2>Monthly Summary</h2>
            {monthlySummaries}
        </div>
    );
};

export default MonthlySummary;
