const mongoose = require('mongoose');
const PaymentStatus = require('../domain/PaymentStatus');
const PaymentMethod = require('../domain/PaymentMethod');
const PaymentOrderStatus = require('../domain/PaymentOrderStatus');

// Define the PaymentOrder schema
const paymentOrderSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true  // Amount is required
    },
    status: {
        type: String,
        enum: Object.values(PaymentOrderStatus),  
        default: PaymentStatus.PENDING 
    },
    paymentMethod: {
        type: String,
        enum: Object.values(PaymentMethod),
        default: PaymentMethod.RAZORPAY
    },
    paymentLinkId: {
        type: String,
        
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true  
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'  
    }]
}, {
    timestamps: true  
});

const PaymentOrder = mongoose.model('PaymentOrder', paymentOrderSchema);
module.exports = PaymentOrder;
