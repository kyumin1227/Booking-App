import { useRecoilValue } from 'recoil';
import { dateString } from '../../atoms';

function DateSeparate() {

    const date = useRecoilValue(dateString);

    const year = date.slice(10, 15);
    const month = date.slice(4, 7);
    const day = date.slice(8, 10);
    const week = date.slice(0, 3);
    
    return (
        <>
            <h1>Date</h1>
            <span>{date ? date : null}</span>
            <br />
            <span>년: { date ? year : null }</span>
            <br />
            <span>월: { date ? month : null }</span>
            <br />
            <span>일: { date ? day : null }</span>
            <br />
            <span>요일: { date ? week : null }</span>
        </>
    )
}

export default DateSeparate;