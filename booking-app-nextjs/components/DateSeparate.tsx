interface iDateSeparate {
    date: string;
}

export default function DateSeparate({ date }: iDateSeparate) {

    const year = date.slice(10, 15);
    const month = date.slice(4, 7);
    const day = date.slice(8, 10);
    const week = date.slice(0, 3);

    return (
        <>
            <span>{year + " " + month + " " + day + " " + week}</span>
        </>
    )
}