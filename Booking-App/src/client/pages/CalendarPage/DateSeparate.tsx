import { useRecoilValue } from 'recoil';
import { dateString } from '../../atoms';

function DateSeparate() {

    const date = useRecoilValue(dateString);
    console.log(date);
    
    
    return (
        <>
            <h1>date</h1>
            <span>{date ? date.toString() : null}</span>
            <br />
            <span>년: { date ? (date.toString()).slice(10, 15) : null }</span>
            <br />
            <span>월: { date ? (date.toString()).slice(4, 7) : null }</span>
            <br />
            <span>일: { date ? (date.toString()).slice(8, 10) : null }</span>
            <br />
            <span>요일: { date ? (date.toString()).slice(0, 3) : null }</span>
        </>
    )
}

export default DateSeparate;