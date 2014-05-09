/**
 * Created by Derek Rada on 5/9/2014.
 */

var nodemailer = require('nodemailer');


var transport = nodemailer.createTransport("SMTP",
    {
        host: 'smtp.gmti.gbahn.net'
    }
);

var message = {

    // sender info
    from: 'Derek Rada <drada@gannett.com>',

    // Comma separated list of recipients
    to: 'Derek Rada <drada@gannett.com>',

    // Subject of the message
    subject: 'Test',

    headers: {
        'X-Laziness-level': 1000
    },

    // HTML body
    html:'<p><b>Hello</b> to myself</p>'

};

console.log('Sending Mail');

transport.sendMail(message, function(error){
    if(error){
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    transport.close();
    process.exit();

    // if you don't want to use this transport object anymore, uncomment following line
    //transport.close(); // close the connection pool
});