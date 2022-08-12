import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxLength: 60,
    },
    total: {
      type: [Number],
      required: true,
    },
    staus: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      required: true,
      maxLength: 200,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);