/**
 * Created by Derek Rada on 5/9/2014.
 */


var simplesmtp = require('simplesmtp');

var client = simplesmtp.connect(25, 'smtp.server.com', {
                       debug: true
    }
);

client.once('idle', function () {
    client.useEnvelope({
                           from: "drada@gannett.com",
                           to: ["drada@gannett.com"]
                       });
});

client.on("message", function(){
    client.write("To: drada@gannett.com\n");
    client.write("From: drada@gannett.com\n");
    client.write("Subject: Test\n");
    client.write("Testing testing testing\n");
});

client.on('ready', function(success, response) {
   if (success) {
       console.log("This message was transmitted successfully");
   }
});