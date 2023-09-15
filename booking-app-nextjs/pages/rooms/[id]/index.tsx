import { useRouter } from "next/router"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import DateSeparate from "@/components/DateSeparate";
import axios from "@/lib/axios";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Room() {
    const [reservation, setReservation] = useState();

    const route = useRouter();
    const { id } = route.query;

    const [dateValue, setDateValue] = useState<Value>();

    const dateValueString = dateValue?.toString() || "string";

    const getReservation = async () => {
        console.log(`/rooms/${id}?date=${dateValueString.slice(0, 15).replaceAll(" ", "")}`);
        
        const res = await axios.get(`/rooms/${id}?date=${dateValueString.slice(0, 15).replaceAll(" ", "")}`);
    }
    

    useEffect(() => {
        setDateValue(new Date())
    }, [])

    useEffect(() => {
        getReservation();
    }, [dateValue])

    console.log(dateValue);
    console.log("string : ", dateValueString);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            <form onSubmit={handleSubmit}>
                <input type="submit"  />
            </form>
        </>
    )
}