const { getAppointments, getAppointment, bookAppointment, destroyAppointments } = require("../controller/appointmentController")
const { authProtected } = require("../middleware/auth")

const router = require("express").Router()

router
    .get("/", getAppointments)
    .get("/:aid", getAppointment)
    .post("/book", authProtected, bookAppointment)
    .delete("/destroy", destroyAppointments)

module.exports = router