import { Schema, model } from 'mongoose';

const citySchema = new Schema(
  {
    name: {
      type: String
    },
    country: {
      type: String
    },
    continent: {
      type: String
    },
    population: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('City', citySchema);

