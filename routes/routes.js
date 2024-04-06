const otp_controller = require('../controllers/otp-controller');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', otp_controller.get_otp_page);
app.get('/get_otp', otp_controller.get_current_otp);

module.exports = app;
