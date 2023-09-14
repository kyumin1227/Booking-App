import { HtmlHTMLAttributes, useEffect, useState } from "react"

export default function CreateRoom() {
    const [startTime, setStartTime] = useState(0);

    const handleStartTime(e: Event) => {
        console.log(e);
        
        setStartTime(e);
    }

    return (<>
        <h1>방 생성</h1>
        <form>
            <label htmlFor="roomName" >방 이름 </label>
            <input id="roomName" placeholder="방 이름" /><br/>
            <label htmlFor="startTime" >운영시간 </label>
            <input id="startTime" step="30" placeholder="" type="time" value={startTime} onChange={handleStartTime} />
            <span> ~ </span>
            <input id="endTime" placeholder="" type="time" min={startTime} /><br/>
            <input id="" placeholder="" />
            <input id="" placeholder="" />
            <input id="" placeholder="" />
            <input id="" placeholder="" />
        </form>
    </>)
}