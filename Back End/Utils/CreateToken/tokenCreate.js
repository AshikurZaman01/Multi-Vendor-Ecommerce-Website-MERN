const jwt = require('jsonwebtoken');

const createToken = async (data) => {
    const token = await jwt.sign(
        data,
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRATION_TIME
        }
    );
    return token;
};

module.exports = createToken;
