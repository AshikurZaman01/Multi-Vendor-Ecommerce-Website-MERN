const jwt = require('jsonwebtoken');

const authMiddlewear = async (req, res, next) => {

    const token = req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Token is required. Please login first.' });
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.id = decoded.id;
        req.role = decoded.role;
        req.email = decoded.email;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Access Token. Please login first.', error: error.message });
    }
}

module.exports = authMiddlewear;