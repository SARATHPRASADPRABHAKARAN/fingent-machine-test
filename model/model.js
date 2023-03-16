import mongoose from "mongoose";
const shortnerSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
  },
});

export const Shortner = mongoose.model("shortner", shortnerSchema);
