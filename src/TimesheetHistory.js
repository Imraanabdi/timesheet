import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const TimesheetHistory = ({ data }) => {
    return (
        <div>
            <h2>Timesheet History</h2>
            <Table>
                <thead>
                    <TableRow>
                        <TableCell><Label>Employee Name</Label></TableCell>
                        <TableCell><Label>Project Name</Label></TableCell>
                        <TableCell><Label>Activity Description</Label></TableCell>
                        <TableCell><Label>Work Hours</Label></TableCell>
                        <TableCell><Label>Break Hours</Label></TableCell>
                        <TableCell><Label>Worked Hours</Label></TableCell>
                        <TableCell><Label>Worked Percentage</Label></TableCell>
                        <TableCell><Label>Date</Label></TableCell>
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <TableRow key={index}>
                            <TableCell>{entry.employeeName}</TableCell>
                            <TableCell>{entry.projectName}</TableCell>
                            <TableCell>{entry.activityDescription}</TableCell>
                            <TableCell>{entry.workHours}</TableCell>
                            <TableCell>{entry.breakHours}</TableCell>
                            <TableCell>{entry.workedHours}</TableCell>
                            <TableCell>{entry.workPercentage.toFixed(2)}%</TableCell>
                            <TableCell>{entry.date.toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TimesheetHistory;
