const { StolenCar } = require("../models/stolenCar.model.js");
const { connect } = require("../db.js");

const resolvers = {
  Query: {
    getStolenCars: async () => {
      await connect();
      return StolenCar.find({});
    },
    getStolenCar: async (parent, args) => {
      await connect();
      return StolenCar.findById(args.id);
    },
  },

  Mutation: {
    addStolenCar: async (parent, args) => {
      await connect();
      const newStolenCar = new StolenCar({
        make: args.make,
        model: args.model,
        year: args.year,
        color: args.color,
        licensePlate: args.licensePlate,
        VIN: args.VIN,
        dateStolen: args.dateStolen,
        location: args.location,
        description: args.description,
        status: args.status,
        ownerLastName: args.ownerLastName,
      });
      return newStolenCar.save();
    },

    updateStolenCar: async (parent, args) => {
      await connect();
      return StolenCar.findByIdAndUpdate(
        args.id,
        {
          make: args.make,
          model: args.model,
          year: args.year,
          color: args.color,
          licensePlate: args.licensePlate,
          VIN: args.VIN,
          dateStolen: args.dateStolen,
          location: args.location,
          description: args.description,
          status: args.status,
          ownerLastName: args.ownerLastName,
        },
        { new: true }
      );
    },

    deleteStolenCar: async (parent, args) => {
      await connect();
      const result = await StolenCar.findByIdAndDelete({ _id: args.id });
      return !!result;
    },
  },
};

module.exports = { resolvers };
