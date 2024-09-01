import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js"; // Import your Sequelize instance
import Product from "./productModel.js";
import User from "./userModel.js"; // Assuming you have a User model

const Order = sequelize.define(
  "Order",
  {
    orderId: {
      type: DataTypes.STRING,
      unique: true,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Order Placed",
      validate: {
        isIn: [
          ["Order Placed", "Processing", "Shipped", "Delivered", "Cancelled"],
        ],
      },
    },
  },
  { timestamps: true }
);

// Define the ProductOrder join table
const ProductOrder = sequelize.define("ProductOrder", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define associations
Order.belongsToMany(Product, { through: ProductOrder });
Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsTo(User, { foreignKey: "buyerId" });

export { Order, ProductOrder };
