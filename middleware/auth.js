const jwt = require('jsonwebtoken');

exports.getJWT = (req, res, next) => {
    if(!req.headers.authorization) res.status(401).json({ message: "Unauthorized" })
    console.log({token: req.headers})
    const token = req.headers.authorization.split(" ")[1];
    if(!token) res.status(401).json({ message: "Unauthorized" })
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" })
    }
    next()
};