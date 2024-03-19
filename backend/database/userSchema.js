import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username:{
          type: String,
     },
     name:{
          type: String,
     },
     email:{
          type: String,
     },
     password:{
          type: String,
     },
     user_img_url:{
          type: String,
     },
     wallet_address:{
          type: String,
     },
     favourites:[{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Event'
     }],
     nft:[{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Event'
     }],
     events:[{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Event'
     }]
})

const User = mongoose.model('User', userSchema);
export default User;