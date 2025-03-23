import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: { type: Object, required: true },
    name: { type: String, required: true },
    email: String,
    password: String,
    password_confirmation: String,
    password_confirmation_confirmation: String,
    username: String,

})
module.exports = mongoose.model('user', UserSchema)|| mongoose.model('user', user);
