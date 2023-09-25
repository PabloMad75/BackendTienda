import express from "express";
import productsRouter from './routes/products.routes.js'
import orderstatusesRouter from './routes/orderstatuses.routes.js'
import categoriesRouter from './routes/categories.routes.js'
import usersRouter from './routes/user.routes.js'

import dotenv from "dotenv";
import { db } from "./config/db.config.js";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Utiliza 3000 como valor predeterminado si no está definido en las variables de entorno

// Middlewares
app.use(express.json()); // Permite el uso de JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Analiza las solicitudes con contenido de tipo 'application/x-www-form-urlencoded'
app.use('/api/v1', productsRouter);
app.use('/api/v1', orderstatusesRouter);
app.use('/api/v1', usersRouter);
app.use('/api/v1', categoriesRouter);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!"); // Responde con un mensaje de saludo en la ruta raíz
});



// Inicia el servidor Express y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

// Conexión a la base de datos utilizando la función db() de tu módulo de configuración de base de datos
db();
