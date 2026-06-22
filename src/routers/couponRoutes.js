// routes/adminCouponRoutes.js
const express = require('express');
const couponController = require('../controllers/couponController');
const router = express.Router();
const authMiddleware = require('../middlewares/userAuthMiddleware.js');

// Route to apply or remove coupon
router.post('/apply',authMiddleware, couponController.applyCoupon);

// Admin routes
router.post('/admin/create', couponController.createCoupon);
router.delete('/admin/delete/:id', couponController.deleteCoupon);
router.get('/admin/all', couponController.getAllCoupons);

module.exports = router;
