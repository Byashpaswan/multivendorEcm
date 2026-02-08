const Razorpay = require('razorpay');

apiKey= process.env.RAZORPAY_API_SECRETE;
apiSecret= process.env.RAZORPAY_KEY ;


const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports = razorpay;