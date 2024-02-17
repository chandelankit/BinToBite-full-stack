import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
    {
        address: {
            type: String,
            required: true,
            trim: true,
        },
        pincode: {
            type: String,
            required: true,
            trim: true,
        },
        state: {
            type: String,
            required: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        organization: {
            type: String,
            trim: true,
        },
        photo: {
            type: String,
        },
        description: {
            type: String,
            trim: true
        },
        owner: {
            type: Schema.Types.Mixed,
            required: true
        }
    },
    {
      timestamps: true
    }
  );

export const Food = mongoose.model("Food", foodSchema);