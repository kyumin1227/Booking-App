import Link from "next/link";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";
import { tRoomModel } from "@/types/rooms";

export default function Rooms() {

    const [rooms, setRooms] = useState<tRoomModel>();

    const getData = async () => {
        const res = await axios.get("/rooms");
        const rooms: tRoomModel  = res.data;
        console.log(rooms);
        
        setRooms(rooms);
    }

    useEffect(() => {
        getData();
        
    }, [])
    
    return <>
        <h1>Rooms</h1>
        {rooms ? (rooms.map((v, i) => {
            return (<>
                <Link key={v._id} href={`/rooms/${v._id}`} >{v.name}</Link>
                <br />
                </>)}
        )) : null}
        <Link href={"/rooms/create"}>방 생성</Link>
    </>
}