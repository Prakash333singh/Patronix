import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js"; // Import your Sequelize instance

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
  },
  {
    tableName: "categories", // Optional: specify the table name if it differs from the model name
    timestamps: false, // Optional: disable timestamps if not needed
  }
);

export default Category;
