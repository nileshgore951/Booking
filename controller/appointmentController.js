const asyncHandler = require("express-async-handler")
const Appointment = require("../models/Appointment")
exports.bookAppointment = asyncHandler(async (req, res) => {
    const result = await Appointment.create({
        ...req.body,
        bookingDate: new Date(`${req.body.date} ${req.body.time}`)
    })
    res.json({ message: "Booking Success", result })
})
exports.getAppointments = asyncHandler(async (req, res) => {
    const result = await Appointment.find(req.body)
    res.json({ message: "all Appointment fetch Success", result })
})
exports.getAppointment = asyncHandler(async (req, res) => {
    const result = await Appointment.findOne({ _id: req.params.aid })
    res.json({ message: "Appointment detail Success", result })
})
exports.destroyAppointments = asyncHandler(async (req, res) => {
    const result = await Appointment.deleteMany()
    res.json({ message: "Appointment detroy Success", result })
})