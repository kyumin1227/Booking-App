import Link from "next/link";

export default function rooms() {
    return <>
        <h1>Rooms</h1>

        <Link href={"/rooms/1"}>Room 1</Link>
        <br/>
        <Link href={"/rooms/2"}>Room 2</Link>
        <br />
        <Link href={"/rooms/create"}>방 생성</Link>
    </>
}