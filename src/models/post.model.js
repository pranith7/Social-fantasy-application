import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        content: 
        {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Post = mongoose.model("Post", postSchema)