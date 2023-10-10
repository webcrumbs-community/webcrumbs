import mongoose , {Schema, models} from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },

     emai : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

},

    {timestamps : true}
    
);

const User = models.User || mongoose.model("User" , userSchema);
export default User;