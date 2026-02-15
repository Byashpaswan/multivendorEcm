# 🛒 E-Commerce Backend API

A scalable and production-ready **E-Commerce Backend Application** built using **Node.js, Express, and MongoDB**.  

This project implements secure **email-based authentication**, complete **product & order management**, shopping cart functionality, checkout flow, and **third-party payment integration (Stripe & Razorpay)**.

Designed following clean architecture principles, scalability best practices, and real-world production standards.

---

## 🚀 Tech Stack

| Layer        | Technology |
|-------------|------------|
| Backend     | Node.js, Express.js |
| Database    | MongoDB (Mongoose ODM) |
| Authentication | JWT (Access + Refresh Tokens) |
| Password Security | bcrypt |
| Validation  | Express Validator / Joi |
| Payments    | Stripe, Razorpay |
| Security    | Helmet, CORS |
| File Upload | Multer |
| Config Management | dotenv |

---

## 📌 Features

### 🔐 Authentication & Authorization
- User Registration (Email-based)
- Secure Password Hashing (bcrypt)
- JWT Authentication (Access + Refresh Tokens)
- Forgot Password / Reset Password
- Role-Based Access Control (Admin / User)
- Protected Routes Middleware

---

### 🛍 Product Management (Admin)
- Create Product
- Update Product
- Delete Product
- Upload Product Images
- Pagination & Filtering
- Search functionality
- Stock management

---

### 🛒 Cart Management
- Add to Cart
- Update Cart Quantity
- Remove from Cart
- Auto Price Calculation
- Prevent Duplicate Cart Items

---

### 📦 Order Management
- Create Order from Cart
- Order Status Tracking:
  - Pending
  - Paid
  - Shipped
  - Delivered
  - Cancelled
- Order History
- Inventory Validation before Checkout
- Admin Order Control Panel

---

### 💳 Payment Integration
Integrated with:

- Stripe (International Payments)
- Razorpay (India-based Payments)

Features:
- Secure Payment Session Creation
- Webhook Verification
- Payment Status Validation
- Duplicate Payment Prevention
- Payment Failure Handling

---

## 🧾 API Endpoints

### 🔑 Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

### 🛍 Products
```
GET    /api/products
GET    /api/products/:id
POST   /api/products        (Admin)
PUT    /api/products/:id    (Admin)
DELETE /api/products/:id    (Admin)
```

### 🛒 Cart
```
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update
DELETE /api/cart/remove
```

### 📦 Orders
```
POST   /api/orders/checkout
GET    /api/orders/my-orders
GET    /api/orders/:id
```

---

## 🏗 Project Structure

```
src/
 ├── controllers/
 ├── services/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── validators/
 ├── config/
 └── app.js
```

- Clean MVC Architecture
- Service layer for business logic
- Centralized error handling
- Modular and scalable folder structure

---

## 🔒 Security Best Practices

- Password hashing using bcrypt
- JWT-based authentication
- Secure HTTP headers with Helmet
- CORS configuration
- Input validation & sanitization
- Environment-based configuration
- MongoDB schema validation
- Rate limiting ready

---

## ⚡ Scalability Considerations

- Stateless authentication (JWT)
- MongoDB indexing for performance
- Horizontal scaling ready
- Payment webhook verification
- Service-based modular architecture
- Production-ready logging & error handling

---

## 🛠 Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Byashpaswan/multivendorEcm.git
cd ecommerce-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret

STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### 4️⃣ Run Application
```bash
npm run dev
```

---

## 🧪 Testing

You can test APIs using:
- Postman
- Thunder Client
- Insomnia

---

## 📈 Future Enhancements

- Redis Caching
- Microservices Architecture
- Message Queue (Kafka / RabbitMQ)
- Elasticsearch for Advanced Search
- Docker Containerization
- CI/CD Pipeline (GitHub Actions)
- Admin Dashboard Frontend

---

## 🎯 Project Objective

This project demonstrates:

- Real-world backend architecture
- Secure authentication system
- Payment gateway integration
- Clean and maintainable code structure
- Production-ready API design
- Scalability best practices

---

## 👨‍💻 BYAS PASWAN

Developed as part of a scalable backend system design and production-ready application learning journey.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!
