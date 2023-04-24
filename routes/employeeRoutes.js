const { registerEmployee, getEmployees, getEmployee, destroyEmployee, getDoctors } = require("../controller/employeeController")

const router = require("express").Router()

router
    .get("/", getEmployees)
    .get("/doctors", getDoctors)
    .get("/:eId", getEmployee)
    .post("/register", registerEmployee)
    .delete("/destroy", destroyEmployee)


module.exports = router