const sgMail = require('@sendgrid/mail'); sgMail.setApiKey("Your-Api-key"); const msg = {

 to: 'mail@gmail.com', 
fromname: 'name',
from: 'yourmail@gmail.com', 
subject: 'Subject', 

text: 'and easy to do anywhere, even with Node.js', 
html: '<strong>and easy to do anywhere, even with Node.js</strong>', 
}; sgMail.send(msg);