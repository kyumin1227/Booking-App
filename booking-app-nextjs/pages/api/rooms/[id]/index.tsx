import dbConnect from "@/lib/db/dbConnect";
import ReservationModel from "@/lib/db/models/reservation";
import RoomModel from "@/lib/db/models/room";
import { NextApiRequest, NextApiResponse } from "next";

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

const makeDateString:tMakeDateString = (date) => {
    const year = date.slice(8, 12);
    const monthEn = date.slice(3, 6);
    const month = monthNameToPaddedNumber(monthEn);
    const day = date.slice(6, 8);
    return {
        startDate: `${year}-${month}-${day}T00:00:00.000+00:00`,
        endDate: `${year}-${month}-${day}T23:59:59.999+00:00`
    };
}

function monthNameToPaddedNumber(monthName: string): string {
  const months: { [key: string]: string } = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };

  // 입력된 월 이름을 대문자로 변환하여 매핑된 숫자를 가져옴
  const paddedNumber = months[monthName.charAt(0).toUpperCase() + monthName.slice(1)];

  if (paddedNumber === undefined) {
    throw new Error('잘못된 월 이름입니다.');
  }

  return paddedNumber;
}

type tMakeDateString = {
    (date: string): {
        startDate: string,
        endDate: string
    }
}