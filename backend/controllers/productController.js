import Product from "../models/productModel.js";
import getImageUrl from "../config/firebaseConfig.js";

export const createProductController = async (req, res) => {
  try {
    const {
      id,
      title,
      desc,
      price,
      category,
      subCategory,
      imagePath1,
      imagePath2,
      newArrival,
      productType,
    } = req.body;

    const image1 = await getImageUrl(imagePath1);
    const image2 = await getImageUrl(imagePath2);

    await Product.create({
      id,
      title,
      description: desc,
      newArrival,
      productType,
      price,
      image1,
      image2,
      category: category,
      subcategory: subCategory,
    });

    res.send({
      message: "Product created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};

export const getSingleProductController = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send({
      product,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const getTypeWiseProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { productType: req.params.productType },
    });
    res.send({
      products,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const getCategoryWiseProducts = async (req, res) => {
  try {
    const { sort, subCats } = req.body;
    const filter = {
      category: req.params.id,
    };
    if (subCats && subCats.length) filter.subcategory = subCats;

    const products = await Product.findAll({
      where: filter,
      order: [[sort.field, sort.order]],
    });
    res.send({
      products,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export const getSearchedProduct = async (req, res) => {
  try {
    const { query } = req.body;
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { description: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.send({
      products,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};
