function getTemplatedMessageObj(recipient, parms) {
  return JSON.stringify({
    "messaging_product": "whatsapp",
    "to": recipient,
    "type": "template",
    "template": {
        "name": "dshrtest4",
        "language": {
            "code": "en_US"
        },
        "components": [{
                "type": "header",
                "parameters": [{
                    "type": "text",
                    "text": parms.role
                }]
            },
            {
                "type": "body",
                "parameters": [{
                        "type": "text",
                        "text": parms.firstName
                    },

                    {
                        "type": "text",
                        "text": parms.companyName
                    }

                ]
            }
        ]
    }
}

  );
}

module.exports = {getTemplatedMessageObj}