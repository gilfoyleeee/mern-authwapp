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
        default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Yaficbwe3N2MjD2Sg0J9OgHaHa%26pid%3DApi&f=1&ipt=2f8510a7e1a10b78117a6c28f940b65063672847fe873e90438edbbc0082b6c2&ipo=images'
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;