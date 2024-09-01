import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection.js"; // Import your Sequelize instance
import Category from "./categoryModel.js";
import SubCategory from "./subCategoryModel.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newArrival: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    productType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
      allowNull: false,
    },
    subcategory: {
      type: DataTypes.INTEGER,
      references: {
        model: SubCategory,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: true, // Enable timestamps
  }
);

// Define associations
Product.belongsTo(Category, { foreignKey: "category" });
Product.belongsTo(SubCategory, { foreignKey: "subcategory" });

export default Product;
