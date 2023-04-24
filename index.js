require("dotenv").config({ path: ".env" })
const mongoose = require("mongoose")
const express = require("express")
const { connectDB } = require("./config/db")
const cors = require("cors")
const cookieParser = require("cookie-parser")
connectDB()
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(express.static("public"))

app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials: true
}))

app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/employee", require("./routes/employeeRoutes"))
app.use("/api/appointment", require("./routes/appointmentRoutes"))

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
    app.listen(process.env.PORT || 5000, err => {
        if (err) {
            return console.log("UNABLE TO START SERVER", err)
        }
        console.log(`SERVER RUNNING ON http://localhost:${process.env.PORT || 5000}`)
    })
})
mongoose.connection.on("error", err => {
    console.log("DB CONNECTION ERROR", err)
})


