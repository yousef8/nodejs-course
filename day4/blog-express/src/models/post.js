import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    createdAt: {
      type: Date,
      default: Date.new,
    },
  },
  {
    toJSON: {
      versionKey: false,
    },
    toObject: {
      versionKey: false,
    },
  }
);

export const PostModel = new mongoose.model("Post", postSchema);
