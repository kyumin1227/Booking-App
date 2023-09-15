import { tMakeRoom, tRoomsCreate } from "@/types/rooms";
import { NextApiRequest, NextApiResponse } from "next";
import Room from "@/lib/db/models/room";
import dbConnect from "@/lib/db/dbConnect";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    switch (req.method) {
        case "POST":
            const { roomName, startTime, endTime, createDate, timeUnit }: tRoomsCreate = req.body;
            const roomDate = []
            for (let i = 0; i < createDate; i++) {
                roomDate.push([i+1])
            }
            const roomData = {
                name: roomName,
                info: "아직",
                price: 1000,
                timeUnit,
            }
            const room = await Room.create(roomData);
            res.status(201).send(room);
            break;
        case "GET":
            const rooms = await Room.find();
            res.status(200).send(rooms);
    }
}

const makeRoom: tMakeRoom = (roomName, startTime, endTime, createDate, timeSeparate) => {
    
}