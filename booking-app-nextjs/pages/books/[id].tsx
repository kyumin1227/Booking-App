import { useRouter } from "next/router"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import DateSeparate from "@/components/DateSeparate";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Room() {
    const route = useRouter();
    const { id } = route.query;
    

    const [dateValue, setDateValue] = useState<Value>();

    const dateValueString = dateValue?.toString() || "string";
    

    useEffect(() => {
        setDateValue(new Date())
    }, [])

    console.log(dateValue);
    console.log("string : ", dateValueString);
    

    
    return (
        <>
            <h1>Room {id}</h1>

            <Calendar onChange={setDateValue} value={dateValue} />
            
            <DateSeparate date={dateValueString} />
        </>
    )
}