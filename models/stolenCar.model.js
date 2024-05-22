const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stolenCarSchema = new Schema(
    {
      make: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
      },
      color: {
        type: String,
      },
      licensePlate: {
        type: String,
        required: true,
      },
      VIN: {
        type: String,
      },
      dateStolen: {
        type: Date,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      status: {
        type: String,
        enum: ['stolen', 'found'],
        default: 'stolen',
      },
      ownerLastName: {
        type: String,
      },
    },
    {
      timestamps: true, 
    }
  );

const StolenCar = mongoose.model("StolenCar", stolenCarSchema);
module.exports = { StolenCar };
