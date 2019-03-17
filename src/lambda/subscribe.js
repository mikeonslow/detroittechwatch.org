require('dotenv').config();

var Mailchimp = require('mailchimp-api-v3');
var validator = require("email-validator");

exports.handler = async (event, context) => {

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if(!event.queryStringParameters.email) {
    return {
      "statusCode": 422,
      "body": responseMessage('Missing query string parameter "email"')
    }
  }

  const { email } = event.queryStringParameters;

  if(!validator.validate(email)) {
    return {
      "statusCode": 422,
      "body": responseMessage(`Email address ${email} is invalid`)
    }
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {statusCode: 405, body: "Method Not Allowed"};
  }

  var mailchimp = new Mailchimp(apiKey);

  let result = await mailchimp.post(`/lists/${listId}/members`, {
    "email_address": email,
    "status": "subscribed"
  })
      .then(function (result) {
        return {
          "statusCode": 200,
          "body": responseMessage('Your email address was added to our list, thanks for subscribing!')
        };
      })
      .catch(function (err) {
        const genericMessage = 'Your email address could not be added, please try again later';
        if(err.statusCode == 400 && err.title == 'Member Exists') {
          alreadySubscribedMessage = "You've already subscribed to our list, you cannot subscribe multiple times!";
        }
        return {
          "statusCode": 500,
          "body": responseMessage(alreadySubscribedMessage || genericMessage)
        };
      });


  return result;

};

function responseBody(data) {
  return JSON.stringify(data);
}

function responseMessage(s) {
  return responseBody({'message': s});
}