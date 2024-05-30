import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Summary = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <h2>Summary</h2>
            <Table>
                <tbody>
                    <TableRow>
                        <TableCell><Label>Employee Name</Label></TableCell>
                        <TableCell><Label>Project Name</Label></TableCell>
                        <TableCell><Label>Activity Description</Label></TableCell>
                        <TableCell><Label>Work Hours</Label></TableCell>
                        <TableCell><Label>Break Hours</Label></TableCell>
                        <TableCell><Label>Worked Hours</Label></TableCell>
                        <TableCell><Label>Date</Label></TableCell>
                    </TableRow>
                    {data.map((entry, index) => (
                        <TableRow key={index}>
                            <TableCell>{entry.employeeName}</TableCell>
                            <TableCell>{entry.projectName}</TableCell>
                            <TableCell>{entry.activityDescription}</TableCell>
                            <TableCell>{entry.workHours}</TableCell>
                            <TableCell>{entry.breakHours}</TableCell>
                            <TableCell>{entry.workedHours}</TableCell>
                            <TableCell>{entry.date.toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Summary;
