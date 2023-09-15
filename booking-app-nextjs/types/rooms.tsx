export type tRoomsCreate = {
    roomName: string,
    startTime: number,
    endTime: number,
    createDate: number,
    timeUnit: number,
}

export type tMakeRoom = {
    (roomName: string,
    startTime: number,
    endTime: number,
    createDate: number,
    timeUnit: number,): void
}

export type tRoomModel = [{
    _id: string,
    name: string,
    info: string,
    price: number,
    timeUnit: number,
    booked: [],
    createAt: Date,
    __v: number
}]