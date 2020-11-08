require('dotenv').config();

module.exports = {
    USER: process.env.GMAIL_USER,
    PASS: process.env.GMAIL_PASS,
    PORT: process.env.PORT
};