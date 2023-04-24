const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String },
    token: { type: String },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    blood: { type: String, enum: ["a+", "b+", "o+", "ab+", "a-", "b-", "o-", "ab-"] },
    height: { type: String },
    weight: { type: String },
    dob: { type: Date },
    active: { type: Boolean, default: true },
    address: { type: String },
    city: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestapms: true })

module.exports = mongoose.model("user", userSchema)