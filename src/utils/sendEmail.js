const nodemailer = require('nodemailer');
async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.GMAIL_USER_EMAIL,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER_EMAIL,
        to,
        subject,
        text
    };
    console.log("Sending email to:", to);
    console.log("Email subject:", subject);
    console.log("Email text:", text);
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}

module.exports = { sendVerificationEmail };
