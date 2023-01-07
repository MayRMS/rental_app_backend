exports.isAdmin = (req, res, next) => {
    if(!req.user || !req.user.admin) res.status(401).json({ message: 'Unauthorized isadmin' })
    next();
};