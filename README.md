# **Patronix E-commerce Platform**

## **Overview**

Patronix is a feature-rich E-commerce platform developed to provide users with a seamless and enjoyable shopping experience. The platform is built with modern web technologies and demonstrates best practices in full-stack development.

## **Live demo**

[demo](https://patronix.netlify.app/)

## **Table of Contents**

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Demo Video

[Watch the Demo Video](https://asset.cloudinary.com/dvp9end1y/bf79b174457052631d3837da54c163c4)

## **Key Features**

- **Comprehensive Product Catalog:**
  - Multiple categories including Electronics, Fashion, Home & Living, Books, and more.
- **Advanced Sorting and Filtering:**
  - Sort by price (ascending/descending).
  - Filter by new arrivals.
  - Browse by categories and subcategories.
- **User Authentication:**
  - Secure login and registration.
  - Profile management.
- **Dynamic Shopping Cart:**
  - Add, remove, and manage items in the cart.
- **Secure Order Processing:**
  - Integration with payment gateways for secure transactions.
- **Responsive Design:**
  - Optimized for all devices, including mobile, tablet, and desktop.
- **State Management:**
  - Efficient management using Redux Toolkit.

## **Technology Stack**

- **Frontend:**
  - ReactJS
- **Backend:**
  - Node.js with Express.js
- **Database:**
  - MySQL
- **State Management:**
  - Redux Toolkit

## **Project Structure**

```
patronix/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
│   └── public/
│
└── README.md
```

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your machine:

- **Node.js**
- **MySQL**

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/patronix.git
   ```

2. **Install backend dependencies:**

   ```bash
   cd patronix/backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up the MySQL database:**

   - Create a new database in MySQL.
   - Update the `config.js` file in the `backend/config/` directory with your database credentials.

5. **Configure environment variables:**
   - Create a `.env` file in the `backend` directory with the following variables:
     ```bash
     PORT=5000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=patronix_db
     JWT_SECRET=your_jwt_secret
     ```

### **Running the Application**

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **In a new terminal, start the frontend application:**

   ```bash
   cd frontend
   npm start
   ```

3. **Access the application:**
   - Open your browser and go to `http://localhost:3000`.

## **API Documentation**

Detailed API documentation is available [here](#). (Include a link to your API documentation or list endpoints directly in this section.)

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## **Acknowledgments**

- Developed as part of an E-commerce platform simulation project.

---
