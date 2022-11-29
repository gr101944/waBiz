
var axios = require('axios');
async function sendMessage (url, payload, headers){
  try {
      const resp = await axios.post(url, payload, {headers});
      console.log(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};
function sendMessageConfig(data) {
  var config = {
    method: 'post',
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios(config)
}

function getTextMessageInput(recipient, text) {
  return JSON.stringify({
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": recipient,
    "type": "text",
    "text": {
        "body": text
    }
  });
}



module.exports = {sendMessage, sendMessageConfig, getTextMessageInput}