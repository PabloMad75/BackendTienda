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

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = new Products(newProduct);
    const setProduct = await product.save();
    res
      .status(201)
      .json({
        message: `Producto ${setProduct.name} fue creado con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};