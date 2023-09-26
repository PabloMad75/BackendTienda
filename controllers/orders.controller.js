import Orders from "../models/Orders.model.js";

export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Orders.find().populate('user').populate('products');
    res.status(200).json(allOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};

export const createOrders = async (req, res) => {
  try {
    const newOrders = req.body;
    const order = new Orders(newOrders);
    const setOrder = await order.save();
    res
      .status(201)
      .json({
        message: `Orden ${setOrder._id} fue creado con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};