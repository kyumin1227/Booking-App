import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateSeparate from '../../../DateSeparate';
import { Value } from '../../../type';
import { useState } from 'react';

const CalendarPage = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <>
            <Calendar onChange={onChange} value={value} />
            <span>{value ? value.toString() : null}</span>
            <DateSeparate />
        </>
    )
}

export default CalendarPage;