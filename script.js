const nodemailer = require('nodemailer');
const readline = require('readline');
var msg;
var rl = readline.createInterface({input: process.stdin, output: process.stdout});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "emai",
        pass: "password"
    },
    tls: {
        rejectUnauthorized: false
    }
});

const mailOptions = {
    from: 'portinho',
    to: 'email',
    subject: 'E-mail enviado usando Node!',
    text: msg
};

rl.question("Digite a mensagem ", function(mensagem) {
    msg = mensagem;
    send(mensagem);
    rl.close();
    
});

function send(mensagem) {
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}
