import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const Form = styled.form`
  background: #f8f9fa;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

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

const Input = styled.input`
  padding: 8px;
  width: calc(100% - 16px); /* Subtract padding */
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #218838;
  }
`;

const TimesheetForm = ({ addEntry }) => {
    const [employeeName, setEmployeeName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    const [workHours, setWorkHours] = useState('');
    const [breakHours, setBreakHours] = useState('');
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const workHoursNum = parseFloat(workHours);
        const breakHoursNum = parseFloat(breakHours);

        if (workHoursNum < breakHoursNum) {
            setError('Break hours cannot exceed work hours');
            return;
        }
        if (workHoursNum < 0 || breakHoursNum < 0) {
            setError('Hours cannot be negative');
            return;
        }
        setError('');
        const workedHours = workHoursNum - breakHoursNum;
        const workPercentage = (workedHours / workHoursNum) * 100;
        addEntry({ employeeName, projectName, activityDescription, workHours: workHoursNum, breakHours: breakHoursNum, workedHours, workPercentage, date });
        setEmployeeName('');
        setProjectName('');
        setActivityDescription('');
        setWorkHours('');
        setBreakHours('');
        setDate(new Date());
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <Table>
                <tbody>
                    <TableRow>
                        <TableCell>
                            <Label>Employee Name:</Label>
                            <Input 
                                type="text" 
                                value={employeeName} 
                                onChange={(e) => setEmployeeName(e.target.value)} 
                            />
                        </TableCell>
                        <TableCell>
                            <Label>Project Name:</Label>
                            <Input 
                                type="text" 
                                value={projectName} 
                                onChange={(e) => setProjectName(e.target.value)} 
                            />
                        </TableCell>
                        <TableCell>
                            <Label>Activity Description:</Label>
                            <Input 
                                type="text" 
                                value={activityDescription} 
                                onChange={(e) => setActivityDescription(e.target.value)} 
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Label>Work Hours:</Label>
                            <Input 
                                type="number" 
                                value={workHours} 
                                onChange={(e) => setWorkHours(e.target.value)} 
                            />
                        </TableCell>
                        <TableCell>
                            <Label>Break Hours:</Label>
                            <Input 
                                type="number" 
                                value={breakHours} 
                                onChange={(e) => setBreakHours(e.target.value)} 
                            />
                        </TableCell>
                        <TableCell>
                            <Label>Date:</Label>
                            <DatePicker selected={date} onChange={date => setDate(date)} />
                        </TableCell>
                    </TableRow>
                </tbody>
            </Table>
            <Button type="submit">Add Entry</Button>
        </Form>
    );
};

export default TimesheetForm;
