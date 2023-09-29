import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
    {
        date: Date,
        reservations: [{
                room: { type: mongoose.Schema.Types.ObjectId, require },
                // user: {type: mongoose.Schema.Types.ObjectId, require},
                startTime: { type: Date },
                endTime: { type: Date },
                createAt: {type: Date, default: Date.now}
            }]
        
    }
)


// mongoose.deleteModel("Reservations");

const ReservationModel =
  mongoose.models["Reservations"] ||
    mongoose.model("Reservations", reservationSchema);
  
export default ReservationModel;