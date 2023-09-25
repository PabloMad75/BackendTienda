import Users from "../models/Users.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const AllUsers = await Users.find();
    console.log(AllUsers);
    res.status(200).json(AllUsers);
  } catch (error) {
    res.status(400).json({ message: "No se encontro nada " });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new Users(newUser);
    const setUser = await user.save();
    res
      .status(201)
      .json({
        message: `Usuario ${setUser.firstName} ${setUser.lastName} fue creado con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};
