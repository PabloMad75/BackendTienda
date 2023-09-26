import Products from "../models/Products.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find().populate("category");
    console.log(allProducts);
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ message: "No se encontro nada " });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = new Products(newProduct);
    const setProduct = await product.save();
    res.status(201).json({
      message: `Producto ${setProduct.name} fue creado con éxito`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};

// Buscar producto por nombre
export const getProductByName = async (req, res) => {
  try {
    const productName = req.params.name; // Obtener el nombre desde los parámetros
    const product = await Products.findOne({ name: productName });

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el producto por nombre" });
  }
};

// Actualizar producto por nombre
export const updateProductByName = async (req, res) => {
  try {
    const productName = req.params.name;
    const updateData = req.body;
    const updatedProduct = await Products.findOneAndUpdate(
      { name: productName },
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(202).json({
      message: `Producto ${updatedProduct.name} actualizado con éxito`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el producto por nombre" });
  }
};

// Eliminar producto por nombre
export const deleteProductByName = async (req, res) => {
  try {
    const productName = req.params.name;
    const removedProduct = await Products.findOneAndDelete({
      name: productName,
    });

    if (!removedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res
      .status(202)
      .json({ message: `Producto ${removedProduct.name} eliminado con éxito` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el producto por nombre" });
  }
};
