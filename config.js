
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mathapati936@gmail.com',
      pass: 'iovudrfbdpgnmkjk'
      
    }
  });
  
  var mailOptions = {
    from: 'mathapati936.com',
    to: 'amodmathapati36@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!guibrwvbkjbvjbvjkbvjkwbbwv'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
