import React, { useState } from 'react';
import DayEntry from './DayEntry';
import Summary from './Summary';

const Timesheet = ({ addDay, days }) => {
    return (
        <div>
            <h1>New Timesheet</h1>
            <DayEntry addDay={addDay} />
            <Summary days={days} />
        </div>
    );
};

export default Timesheet;
