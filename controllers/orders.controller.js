import Orders from "../models/Orders.model.js";

export const getAllOrders = async (req, res) => {
  try {
    const AllOrders = await Orders.find();
    console.log(AllOrders);
    res.status(200).json(AllOrders);
  } catch (error) {
    res.status(400).json({ message: "No se encontro nada " });
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