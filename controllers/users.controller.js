import bcrypt from "bcrypt";
import Users from "../models/Users.model.js";
import jwt from "jsonwebtoken";

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
    console.log(userEmail);
    const user = await Users.findOne({ emailAddress: userEmail });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar el usuario por correo electrónico" });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      address,
      phoneNumber,
      role,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !emailAddress ||
      !password ||
      !address ||
      !phoneNumber
    ) {
      console.log(
        `${(firstName,
          lastName,
          emailAddress,
          password,
          address,
          phoneNumber,
          role)
        }`
      );
      return res
        .status(400)
        .json({ message: "Debes rellenar todos los campos" });
    }

    const passwordEncrypt = await bcrypt.hash(password, 10);

    const user = new Users({
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: passwordEncrypt,
      address: address,
      phoneNumber: phoneNumber,
      role: 'cliente',
      orders: [],
    });

    const setUser = await user.save();

    const expireTime = Math.floor(new Date() / 1000) + 3600;

    const token = jwt.sign(
      {
        exp: expireTime,
        data: {
          _id: setUser._id,
          // firstName: firstName,
          // lastName: lastName,
          // emailAddress: emailAddress,
          // address: address,
          // phoneNumber: phoneNumber,
          // role: role,
        },
      },
      process.env.SECRET_KEY
    );

    console.log(req.body);
    res.status(201).json({
      message: `Usuario ${setUser.firstName} ${setUser.lastName} fue creado con éxito`,
      token,
      user: setUser
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `El registro No se logró grabar con éxito ${error.message}`,
      });
  }
};

export const updateUser = async (req, res) => {
  try {
    const idBody = req.body._id;
    const updateData = req.body;
    console.log("variable Id backend", idBody);
    console.log("Body backend", req.body);
    const updateUser = await Users.findOneAndUpdate(
      { _id: idBody },
      updateData,
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res
      .status(202)
      .json({
        updatedUser: updateUser,
        message: `Usuario ${updateUser.firstName} ${updateUser.lastName} actualizado con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};

export const deleteUserByEmail = async (req, res) => {
  try {
    const userMail = req.params.mail;
    const removeUserByEmail = await Users.findOneAndDelete({
      emailAddress: userMail,
    });
    if (!updateUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res
      .status(202)
      .json({
        message: `Usuario ${removeUserByEmail.firstName} ${removeUserByEmail.lastName} eliminado con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró eliminar  con éxito` });
  }
};

export const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    const verifyUserByCorreo = await Users.findOne({
      emailAddress: emailAddress,
    });
    if (!verifyUserByCorreo) {
      return res
        .status(404)
        .json({
          message: `El correo de usuario '${emailAddress}' no existe en nuestra base de datos`,
        });
    }

    const verifyPassword = await bcrypt.compare(password, verifyUserByCorreo.password)
    if(!verifyPassword){
      return res.status(401).json({message:'Contraseña incorrecta'})
    }

    const expireTime = Math.floor(new Date()/1000)+3600;

    const { _id, firstName, lastName, address, phoneNumber, role } =
      verifyUserByCorreo;

      const token = jwt.sign(
        {
          exp: expireTime,
          data: {
            _id,
            // firstName: firstName,
            // lastName: lastName,
            // emailAddress: emailAddress,
            // address: address,
            // phoneNumber: phoneNumber,
            // role: role,
          },
        },
        process.env.SECRET_KEY
      );

    res.json(token);
    //  else {
    //   return res.status(200).json({ message: `La contraseña es correcta, bienvenido ${verifyUserByCorreo.firstName}` });
    // }

    // Resto de tu código para generar el token...
  } catch (error) {
    res
      .status(403)
      .json({
        message: `No pudimos verificar tu cuenta debido a un error: ${error.message}`,
      });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const user = await Users.findById(req.data._id).select('-password')
    res.json(user)
  } catch (error) {
    return res.status(500).json({ message: 'No pudimos verificar al usuario' })
  }
}
