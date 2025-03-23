const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bill = mongoose.model('bill', bill);
const bill = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    userID: { type: Schema.Types.ObjectId, ref: 'user' },
    total: { type: Number, required: true },
    status: { type: String, required: true },
    detail: { type: ObjectId, ref: 'user' },
})