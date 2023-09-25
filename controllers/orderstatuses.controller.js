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