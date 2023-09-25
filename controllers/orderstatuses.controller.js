import OrderStatuses from '../models/OrderStatuses.model.js';


export const getAllOrderStatus = async (req, res) => {
  try {
    const AllOrderStatus = await OrderStatuses.find()
    console.log(AllOrderStatus)
    res.status(200).json(AllOrderStatus)
  } catch (error) {
    res.status(400).json({message: "No se encontro nada "})
  }
}

export const createOrderStatus = async (req, res) => {
  try {
    const newOrderStatus = req.body;
    const orderStatus = new OrderStatuses(newOrderStatus);
    const setOrderStatus = await orderStatus.save();
    res
      .status(201)
      .json({
        message: `Categoría ${setOrderStatus.name} creada con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};