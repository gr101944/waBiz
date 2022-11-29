var utils = require('./Helper/utils');
var templates = require('./Helper/templates');
require ("dotenv").config();
const FB_URL = process.env.FB_URL
const FB_TOKEN =  process.env.FB_TOKEN

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${FB_TOKEN}`
};
var recipienttNumber = "919686753951"
var parmsQuestion = {
    role: "Node JS Developer",
    firstName: "Rajesh",
    companyName: "Digital Sherpa"
}

var payLoad3 = templates.getTemplatedMessageObj (recipienttNumber, parmsQuestion)
utils.sendMessage(FB_URL, payLoad3, headers)


                  