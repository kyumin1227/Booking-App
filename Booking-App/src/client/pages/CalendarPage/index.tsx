import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateSeparate from './DateSeparate';
import { Value } from '../../../types';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { dateString } from '../../atoms';

const CalendarPage = () => {
    const [value, onChange] = useState<Value>(new Date());
    const setDate = useSetRecoilState(dateString);
    const dateStringValue = value?.toString();

    // 날짜가 변경될 경우 dateString(atom)의 값을 변경
    const dateChange = () => {
        if (dateStringValue) {
            setDate(dateStringValue);
        }
    }

    useEffect(() => {
        dateChange();
    }, [value])


    return (
        <>
            <Calendar onChange={onChange} />

            <DateSeparate />
        </>
    )
}

export default CalendarPage;