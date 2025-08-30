const UserRoles = require("../domain/UserRole");
const SellerError = require("../exceptions/SellerError");
const Seller = require("../models/Seller");
const VerificationCode = require("../models/VerificationCode");
const SellerService = require("../services/SellerService");
const VerificationService = require("../services/VerificationService");
const generateOTP = require("../utils/generateOtp");
const jwtProvider = require("../utils/jwtProvider");
const { sendVerificationEmail } = require("../utils/sendEmail");

class SellerController {
  async getSellerProfile(req, res) {
    try {
      const jwt=req.headers.authorization.split(" ")[1];
      const seller = await SellerService.getSellerProfile(jwt);
      // const seller=req.seller

      res.status(200).json(seller);
    } catch (err) {
      res
        .status(err instanceof SellerError ? 404 : 500)
        .json({ message: err.message });
    }
  }

  async createSeller(req, res) {
    try {
      const newSeller = await SellerService.createSeller(req.body);

      // Step 2: Generate OTP
      const otp = generateOTP();
      const verificationCode = await VerificationService.createVerificationCode(
        otp,
        req.body.email
      );

      // Step 3: Send verification email
      const subject = "CapitalMart Email Verification Code";
      const text =
        "Welcome to CapitalMart, verify your account using this link: ";
      const frontendUrl = "https://capitalmart.netlify.app/verify-seller/" + otp;
      await sendVerificationEmail(
        req.body.email,
        subject,
        text + frontendUrl
      );

      return res
        .status(201)
        .json({
          message: "Seller created successfully, verification email sent.",
        });
      
    } catch (err) {
      res
        .status(err instanceof SellerError ? 400 : 500)
        .json({ error: err.message });
    }
  }

  

  async getSellerById(req, res) {
    try {
      const seller = await SellerService.getSellerById(req.params.id);
      res.status(200).json(seller);
    } catch (err) {
      res
        .status(err instanceof SellerError ? 404 : 500)
        .json({ message: err.message });
    }
  }

  async getAllSellers(req, res) {
    try {
      const { status } = req.query;
      const sellers = await SellerService.getAllSellers(status);
      res.status(200).json(sellers);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateSeller(req, res) {
    try {
      const seller = await req.seller;
      const updatedSeller = await SellerService.updateSeller(
        seller,
        req.body
      );
      res.status(200).json(updatedSeller);
    } catch (err) {
      res
        .status(err instanceof SellerError ? 404 : 500)
        .json({ message: err.message });
    }
  }

  async deleteSeller(req, res) {
    try {
      await SellerService.deleteSeller(req.params.id);
      res.status(204).send(); // No Content
    } catch (err) {
      res
        .status(err instanceof SellerError ? 404 : 500)
        .json({ message: err.message });
    }
  }

  async verifyEmail(req, res) {
    try {
      const { email, otp } = req.body; // Expecting email and OTP in request body
      const seller = await SellerService.verifyEmail(email, otp);
      res.status(200).json(seller);
    } catch (err) {
      res
        .status(err instanceof SellerError ? 404 : 500)
        .json({ message: err.message });
    }
  }

  async updateSellerAccountStatus(req, res) {
    try {
      const updatedSeller = await SellerService.updateSellerAccountStatus(
        req.params.id,
        req.params.status
      );
      res.status(200).json(updatedSeller);
    } catch (err) {
      res
        .status(err instanceof SellerError ? 404 : 500)
        .json({ message: err.message });
    }
  }

  async verifyLoginOtp(req, res) {
    try {
      const { otp, email } = req.body;

      const seller = await Seller.findOne({ email });

      

      if (!seller) {
        throw new SellerError("Invalid username...");
      }

      const verificationCode = await VerificationCode.findOne({ email });

      if (!verificationCode || verificationCode.otp !== otp) {
        throw new Error("Wrong OTP...");
      }
      const token = jwtProvider.createJwt({ email });

      const authResponse = {
        message: "Login Success",
        jwt: token,
        role: UserRoles.SELLER,
      };

      return res.status(200).json(authResponse);
    } catch (err) {
      res
        .status(err instanceof SellerError ? 400 : 500)
        .json({ message: err.message });
    }
  }
}

module.exports = new SellerController();
