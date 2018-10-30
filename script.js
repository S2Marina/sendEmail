const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
  	user: "from@gmail.com",
  	pass: "yourpassword"
  },
  tls: { rejectUnauthorized: false }
});

const mailOptions = {
  from: 'from@gmail.com',
  to: 'to@gmail.com',
  subject: 'E-mail enviado usando Node!',
  text: 'Oii!!! To mandando email com node \o/'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});
