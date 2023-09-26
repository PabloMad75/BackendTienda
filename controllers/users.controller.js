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

export const getUserByEmail = async (req, res) => {
  try {
    const userEmail = req.params.mail; // Obtener el correo electrónico de los parámetros de la solicitud
    console.log(userEmail)
    const user = await Users.findOne({ emailAddress: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el usuario por correo electrónico' });
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

export const updateUser = async (req, res) => {
  try {
    const userMail = req.params.mail;
    const updateData = req.body
    const updateUser = await Users.findOneAndUpdate({ emailAddress: userMail }, updateData, { new: true })
    if (!updateUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(202).json({ message: `Usuario ${updateUser.firstName} ${updateUser.lastName} actualizado con éxito` })
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
}

export const deleteUserByEmail = async (req, res) => {
  try {
    const userMail = req.params.mail;
    const removeUserByEmail = await Users.findOneAndDelete({ emailAddress: userMail })
    if (!updateUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(202).json({ message: `Usuario ${removeUserByEmail.firstName} ${removeUserByEmail.lastName} eliminado con éxito` })
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró eliminar  con éxito` });
  }
}