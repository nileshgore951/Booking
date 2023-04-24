const { readUser, readUsers, register, login, continueWithGoolge, handleAccount, deleteUser, destroyUser, updateUser } = require("../controller/userController")

const router = require("express").Router()

router
    .get("/", readUsers)
    .get("/:id", readUser)
    .post("/register", register)
    .post("/login", login)
    .post("/continue-with-google", continueWithGoolge)
    .put("/account/:id", handleAccount)
    .put("/update/:id", updateUser)
    .delete("/destroy", destroyUser)
    .delete("/:id", deleteUser)


module.exports = router