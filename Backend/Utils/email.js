const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

const sendEmail = async options => {
    // 1) Create a transporter
    // const transporter = nodemailer.createTransport({
    //     host: process.env.EMAIL_HOST,
    //     port: process.env.EMAIL_PORT,
    //     auth: {
    //         user: process.env.EMAIL_USERNAME,
    //         pass: process.env.EMAIL_PASSWORD
    //     }
    // });

    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "315ab984f35d7a",
            pass: "4b5615cf7f25a8"
        }
    });


    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: "avcfgb507@gmail.com",
    //         pass: "ovcivoxojtdgbnuo"
    //     },
    // });



    // 2) Define the email options
    const mailOptions = {
        from: 'EyePax <EyePax@gmail.com>',
        to: options.email,
        subject: options.subject,
        html: options.message,
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
