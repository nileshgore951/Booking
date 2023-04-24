const jwt = require("jsonwebtoken")
exports.authProtected = (req, res, next) => {
    if (!req.cookies) {
        return res.status(401).json({
            message: "No cookie Found"
        })
    }
    const { token } = req.cookies
    // console.log(token)
    if (!token) {
        return res.status(401).json({ message: "token missing" })
    }
    const { } = jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return res.status(401).json({ message: "invalid Token" })
        }
        const { id, role } = decode
        req.body.userId = id
        req.body.role = role
        next()
    })

}