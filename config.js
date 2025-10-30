const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~gARSVbTJ#8UZ3TpuMjf-hU5OFIpgkWeIchgy3w1kYSS3EKvS4kdM'
};
