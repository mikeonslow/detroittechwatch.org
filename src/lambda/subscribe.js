require('dotenv').config();

var Mailchimp = require('mailchimp-api-v3');
var validator = require("email-validator");

exports.handler = async (event, context) => {

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  const {body} = event;

  if (typeof body != 'string' || !body.match(/{"subscriber"./g) || !JSON.parse(event.body)) {
    return {
      "statusCode": 400,
      "body": responseMessage('Bad request body')
    }
  }

  const requestBody = JSON.parse(body);

  if (!requestBody.subscriber) {
    return {
      "statusCode": 400,
      "body": responseMessage('Subscriber is invalid')
    }
  }

  const {subscriber} = requestBody;

  if (!validator.validate(subscriber)) {
    return {
      "statusCode": 422,
      "body": responseMessage(`Email address ${subscriber} is invalid`)
    }
  }

  if (event.httpMethod !== "POST") {
    return {statusCode: 405, body: "Method Not Allowed"};
  }

  var mailchimp = new Mailchimp(apiKey);

  let result = await mailchimp.post(`/lists/${listId}/members`, {
    "email_address": subscriber,
    "status": "subscribed"
  })
      .then(function (result) {
        return handleSuccess(result, subscriber);
      })
      .catch(function (err) {
        var message = 'Your email address could not be added, please try again later';

        if (err.status === 400 && err.title === 'Member Exists') {
          message = "You've already subscribed to our list, you cannot subscribe multiple times!";
        }
        return {
          "statusCode": err.status,
          "body": responseMessage(message)
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

function handleSuccess(result, originalEmail) {
  const successMessage = 'Your email address was added to our list, thanks for subscribing!';
  const errorMessage = 'Your email address could not be added to our list, please try again later';

  const subscribeSuccessful = result.email_address && result.status
      && result.email_address === originalEmail && result.status === 'subscribed';

  return {
    "statusCode": subscribeSuccessful ? 200 : 500,
    "body": responseMessage(subscribeSuccessful ? successMessage : errorMessage)
  }
}