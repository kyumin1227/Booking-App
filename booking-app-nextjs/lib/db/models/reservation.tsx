import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
    {
        date: Date,
        reservations: [{
                room: { type: mongoose.Schema.Types.ObjectId, require },
                // user: {type: mongoose.Schema.Types.ObjectId, require},
                time: {type: Number},
                createAt: {type: Date, default: Date.now}
            }]
        
    }
)

const ReservationModel =
  mongoose.models["Reservations"] ||
    mongoose.model("Reservations", reservationSchema);
  
export default ReservationModel;