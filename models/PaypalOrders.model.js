const mongoose = require('mongoose');

// Define la estructura de los documentos en la colección
const PaypalOrdersSchema = new mongoose.Schema({
  orderId: String, // ID del pedido
  intent: String, // Intento (por ejemplo, "CAPTURE")
  status: String, // Estado del pedido (por ejemplo, "COMPLETED")
  currencyCode: String, // Código de moneda (por ejemplo, "USD")
  totalValue: Number, // Valor total del pedido
  description: String, // Descripción del pedido
  payerName: String, // Nombre del pagador
  payerEmailAddress: String, // Correo electrónico del pagador
  create_time: Date, // Fecha y hora de creación
  // Otros campos relevantes que desees guardar
}, {versionKey:false});

// Crea el modelo para la colección 'orders' con el esquema definido
const PaypalOrders = mongoose.model('paypalorders', userSchema);

export default PaypalOrders;
