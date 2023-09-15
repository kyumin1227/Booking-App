import React, { HtmlHTMLAttributes, useEffect, useState } from "react"
import axios from "@/lib/axios";

export default function CreateRoom() {
    const [startTime, setStartTime] = useState("");

    const handleStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setStartTime(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.defaultPrevented
        axios.post("/rooms", {
            "roomName": " badRoom",
            "startTime": 8,
            "endTime": 20.5,
            "createDate": 30,
            "timeUnit": 60,
        })
    } 

    return (<>
        <h1>방 생성</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="roomName" >방 이름 </label>
            <input id="roomName" placeholder="방 이름" /><br/>
            <label htmlFor="startTime" >운영시간 </label>
            <input id="startTime" placeholder="" type="time" value={startTime} onChange={handleStartTime} />
            <span> ~ </span>
            <input id="endTime" placeholder="" type="time" min={startTime} /><br />
            <label htmlFor="createDate" >미리 생성할 날짜 </label>
            <input id="createDate" type="number" min="30" max="100" /><br />
            <label htmlFor="timeSeparate" >시간 단위(분) </label>
            <input id="timeSeparate" type="number" min="30" max="60" step="30" /><br />
            <input placeholder="" type="submit" />
        </form>
    </>)
}