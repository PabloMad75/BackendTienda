import Products from '../models/Products.model.js';


export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find()
    console.log(allProducts)
    res.status(200).json(allProducts)
  } catch (error) {
    res.status(400).json({message: "No se encontro nada "})
  }
}