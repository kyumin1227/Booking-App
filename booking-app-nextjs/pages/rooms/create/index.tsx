import React, { HtmlHTMLAttributes, useEffect, useState } from "react"
import axios from "@/lib/axios";

export default function CreateRoom() {

    const [roomName, setRoomName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [createDate, setCreateDate] = useState('');
    const [timeSeparate, setTimeSeparate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        axios.post("/rooms", {
            "roomName": roomName,
            "startTime": startTime, // ex "13:30"
            "endTime": endTime,
            "createDate": createDate,
            "timeUnit": timeSeparate,
        })
    } 

    return (<>
        <h1>방 생성</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="roomName">방 이름</label>
            <input id="roomName" placeholder="방 이름" value={roomName} onChange={(e) => setRoomName(e.target.value)} /><br />
            <label htmlFor="startTime">운영시간</label>
            <input id="startTime" placeholder="" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <span> ~ </span>
            <input id="endTime" placeholder="" type="time" min={startTime} value={endTime} onChange={(e) => setEndTime(e.target.value)} /><br />
            <label htmlFor="createDate">미리 생성할 날짜</label>
            <input id="createDate" type="number" min="30" max="100" value={createDate} onChange={(e) => setCreateDate(e.target.value)} /><br />
            <label htmlFor="timeSeparate">시간 단위(분)</label>
            <input id="timeSeparate" type="number" min="30" max="60" step="30" value={timeSeparate} onChange={(e) => setTimeSeparate(e.target.value)} /><br />
            <input placeholder="" type="submit" />
        </form>
    </>)
}