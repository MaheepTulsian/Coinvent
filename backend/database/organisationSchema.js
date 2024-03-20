import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
     
     organisation_name:{
          type: String,
     },
     organisation_logo_url:{
          type: String,
     },
     email:{
          type: String,
     },
     password:{
          type: String,
     },
     organisation_nft_img_url:{
          type: String,
     },
     wallet_address:{
          type: String,
     },
     events:[{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Event'
     }]
})

const Organisation = mongoose.model('Organisation', organisationSchema);
export default Organisation;