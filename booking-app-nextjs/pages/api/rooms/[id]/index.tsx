import dbConnect from "@/lib/db/dbConnect";
import ReservationModel from "@/lib/db/models/reservation";
import RoomModel from "@/lib/db/models/room";
import { NextApiRequest, NextApiResponse } from "next";
import makeDateString from "@/functions/DateString/makeDateString";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    switch (req.method) {
        case "GET":
            const { id, date } = req.query;
            if (typeof date === "string") {
                const { startDate, endDate } = makeDateString(date);
                console.log(startDate);
                console.log(endDate);
                
                const reservations = await RoomModel.find({
                    _id: id,
                    booked: {
                        $elemMatch: {
                            date: { $gte: startDate, $lt: endDate }
                        }
                    }
                })
                res.status(201).send(reservations);
            }
            break;
        
        case "POST":
            const data = req.body;
            const reservationDate = data.date;
            const sameDate = await ReservationModel.findOne({ date: reservationDate })
            if (sameDate) {
                console.log("same", sameDate);
            }
            const roomId = data.reservations.room;
            const f = await ReservationModel.create(
                data
            )
            console.log(roomId);
            
            res.send("r");
            break;
    }
}