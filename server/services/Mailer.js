const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

// this.from_email = new helper.Email('no-reply@emaily.com');

class Mailer extends helper.Mail {}

module.exports = Mailer;
