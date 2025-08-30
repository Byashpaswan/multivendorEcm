const nodemailer = require('nodemailer');
async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'bayass748@gmail.com',
            pass: 'djtz tvks sbbt euke' 
        }
    });

    const mailOptions = {
        from: 'bayass748@gmail.com',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
