import Users from '../models/Users.model.js';


export const getAllUsers = async (req, res) => {
  try {
    const AllUsers = await Users.find()
    console.log(AllUsers)
    res.status(200).json(AllUsers)
  } catch (error) {
    res.status(400).json({message: "No se encontro nada "})
  }
}