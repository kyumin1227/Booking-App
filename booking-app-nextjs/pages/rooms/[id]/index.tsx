import { useRouter } from "next/router"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import DateSeparate from "@/components/DateSeparate";
import axios from "@/lib/axios";
import makeDateString from "@/functions/DateString/makeDateString";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Room() {
    const [reservation, setReservation] = useState();

    const route = useRouter();
    const { id } = route.query;

    const [dateValue, setDateValue] = useState<Value>();

    const dateValueString = dateValue?.toString() || "string";
    // dateValueString : Thu Sep 21 2023 00:00:00 GMT+0900 (한국 표준시)

    const { startDate, endDate } = makeDateString(dateValueString.slice(0, 15).replaceAll(" ", ""));

    console.log(startDate);
    console.log(endDate);

    const getReservation = async () => {
        console.log(`/rooms/${id}?date=${dateValueString.slice(0, 15).replaceAll(" ", "")}`);
        
        const res = await axios.get(`/rooms/${id}?date=${dateValueString.slice(0, 15).replaceAll(" ", "")}`);
    }
    

    useEffect(() => {
        setDateValue(new Date())
    }, [])

    useEffect(() => {
        if (dateValue === undefined)
            return;
        getReservation();
    }, [dateValue])

    console.log(dateValue);
    console.log("string : ", dateValueString);

    // 예약 제출
    const reservationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const date = new Date("2023-09-10")

        const data = {
            date,
            reservations: {
                room: id,
                time: 3
            }
        }

        const res = await axios.post(`/rooms/${id}`, data)
    }
    
    return (
        <>
            <h1>Room {id}</h1>

            <Calendar onChange={setDateValue} value={dateValue} />
            
            <DateSeparate date={dateValueString} />

            

            <form onSubmit={reservationSubmit}>
                <input type="submit"  />
            </form>
        </>
    )
}