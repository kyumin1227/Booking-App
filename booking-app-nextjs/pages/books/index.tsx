import Link from "next/link";

export default function books() {
    return <>
        <h1>Books</h1>

        <Link href={"/books/1"}>Room 1</Link>
        <br/>
        <Link href={"/books/2"}>Room 2</Link>
    </>
}