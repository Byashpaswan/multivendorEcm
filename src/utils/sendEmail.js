// const nodemailer = require('nodemailer');
// async function sendVerificationEmail(to, subject, text) {
//     const transporter = nodemailer.createTransport({
//         // service: 'gmail', 
//         // auth: {
//         //     user: process.env.GMAIL_USER_EMAIL,
//         //     pass: process.env.GMAIL_APP_PASSWORD
//         // }
//         host: "smtp.sendgrid.net",
//         port: 587,
//         secure: false, // true for 465, false for 587
//         auth: {
//             user: 'apikey', // literally "apikey"
//             pass: process.env.SENDGRID_API_KEY
//         }
//     });

//     const mailOptions = {
//         from:  '"capitalMart" <no-reply@byas.paswan99@gmail.com>' ,  ///process.env.GMAIL_USER_EMAIL,
//         to,
//         subject,
//         text
//     };
//     console.log("Sending email to:", to);
//     console.log("Email subject:", subject);
//     console.log("Email text:", text);
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log("Email sent successfully");
//     } catch (error) {
//         console.error("Error sending email:", error);
//         throw new Error("Failed to send email");
//     }
// }

// module.exports = { sendVerificationEmail };


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendVerificationEmail(to, subject, text) {
  const msg = {
    to,
    from: 'byas.paswan99@gmail.com',   // ✅ must match verified sender in SendGrid
    subject,
    text,
    html: `<p>${text}</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.response ? error.response.body : error);
    throw new Error("Failed to send email");
  }
}

module.exports = { sendVerificationEmail };
