import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js"; // Import your Sequelize instance
import Category from "./categoryModel.js"; // Import the Category model for association

const SubCategory = sequelize.define(
  "SubCategory",
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
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "subcategories", // Optional: specify the table name if it differs from the model name
    timestamps: false, // Optional: disable timestamps if not needed
  }
);

// Define association
SubCategory.belongsTo(Category, { foreignKey: "category" });
Category.hasMany(SubCategory, { foreignKey: "category" });

export default SubCategory;
