require('dotenv').config()


module.exports = {
    mongoURI: process.env.MONGOURI,
    secretOrKey: process.env.SECRETKEY
};
