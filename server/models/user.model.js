import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fuser-icon-1024x1024-dtzturco.png&f=1&nofb=1&ipt=38b9085bc1735b08cd813eb9f52a74b954048669acafc78ca616b51fe141bb46&ipo=images'
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;