import express from "express";
import sequelize from "./config/dbConnection.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.options("*", cors());

// Connect to the database
sequelize
  .sync({ force: false }) // Set force to true to drop and recreate tables on every app launch
  .then(() => {
    console.log("Database & tables created!");
  });

app.get("/", (req, res) => {
  res.send("hello");
});

// routes
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/orders", orderRoute);

app.listen(port, () => {
  console.log("Server running on port", port);
});

export default app;
