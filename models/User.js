import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  paswordHash: {
    type: String,
    required: true,
  }, 
  address: {
    type: String,
    required: true,
  },
  avatarUrl: String
},{
  timestamps: true
});

export default mongoose.model('User', UserSchema)