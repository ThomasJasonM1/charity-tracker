const router = require("express").Router();
const userController = require("../../controllers/userController");
const request = require('request');
require("dotenv").config();

const oauth = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.AUTH_TOKEN,
}

const sendAdminSMSBroadcast = (body) => {
  new Promise ((resolve, reject) => {
      return request({
          url: 'https://rest-in.call-em-all.com/broadcasts',
          oauth:  oauth,
          method: 'POST',
          body: body,
          json: true,
          headers: [
              {
                name: 'content-type',
                value: 'application/json'
              }
            ],
      }, ((err, resp, body) => {
          if (err) {
              reject(console.log(err));
          }
          resolve(console.log('Response: ','Success'));
      }));
  });
};

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/login")
  .post(userController.login);

router.route("/volunteer")
  .post((req, res) => {
    const contactInfo = req.body;
    const body = 
    {
        "BroadcastName": `Volunteer message to ${contactInfo.firstName} ${contactInfo.lastName}`,
        "BroadcastType": "SMS",
        "StartDate": "",
        "CheckCallingWindow": false,
        "TextMessage": `You have successfully signed up for volunteer alerts from ${contactInfo.orgName}!`,
        "TextNumberID": 38508,
        "Contacts":
          [
              {
                  "FirstName": contactInfo.firstName,
                  "LastName": contactInfo.lastName,
                  "PrimaryPhone": contactInfo.phone
              }
          ]
    };
    sendAdminSMSBroadcast(body);
  })

module.exports = router;
