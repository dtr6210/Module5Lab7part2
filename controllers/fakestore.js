const axios = require("axios");

// Controller function to get products by category
const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  console.log("Category:", category);

  // Making an Axios Request
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const products = Array.isArray(response.data) ? response.data : [];

  // Sending JSON Response
  res.json(products);
};

// Exporting the controller function
module.exports = { getProductsByCategory };
