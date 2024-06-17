import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        followers:[{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
         }],
        following: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        avatar:{
            type: String, //cloudinary url
            required: true
        },
        coverImage:{
            type: String
        },
        password: {
            type: String,
            required: [true, 'Password is required']

        },
        refreshToken:{
            type: String
        }
    },
    {
       timestamps: true 
    }
)  

export const User = mongoose.model("User", userSchema)