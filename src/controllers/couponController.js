const couponService = require("../services/CouponService");
const UserService = require("../services/UserService");

class couponController {
  async applyCoupon(req, res) {
    try {
      const applyVal = req.query.apply !== undefined ? req.query.apply : req.body.apply;
      const code = req.query.code || req.body.code;
      const orderValue = Number(req.query.orderValue !== undefined ? req.query.orderValue : req.body.orderValue);

      console.log("applyCoupon parameters:", { applyVal, code, orderValue });

      const user = await req.user;
      console.log("user--", user);
      let cart;

      if (applyVal === "true" || applyVal === true) {
        cart = await couponService.applyCoupon(code, orderValue, user);
      } else {
        cart = await couponService.removeCoupon(code, user);
      }

      return res.status(200).json(cart);
    } catch (error) {
      const statusCode = error.statusCode || 500;
      res.status(statusCode).json({ message: error.message });
    }
  }

  // Create a coupon (admin)
  async createCoupon(req, res) {
    try {
      const coupon = await couponService.createCoupon(req.body);
      return res.status(200).json(coupon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a coupon (admin)
  async deleteCoupon(req, res) {
    try {
      await couponService.deleteCoupon(req.params.id);
      return res.status(200).json({ message: "Coupon deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all coupons (admin)
  async getAllCoupons(req, res) {
    try {
      const coupons = await couponService.getAllCoupons();
      return res.status(200).json(coupons);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}


module.exports = new couponController();
