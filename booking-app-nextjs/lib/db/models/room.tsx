import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
    {   
        name: { type: String, default: "" },
        info: { type: String, default: "" },
        price: { type: Number, default: 0 },
        timeUnit: {type: Number, default: 60}, // 예약 시간 단위
        booked: [{ type: mongoose.Schema.Types.ObjectId, ref: "reservations" }],
        createAt: {type: Date, default: Date.now}
    }
)

const RoomModel =
  mongoose.models["Rooms"] ||
    mongoose.model("Rooms", roomSchema);
  
export default RoomModel;

// 이름, 정보, 예약 현황, 휴일, 사용 가능 인원수, 최소 예약 시간, 가격, 소유자(관리자), 주소