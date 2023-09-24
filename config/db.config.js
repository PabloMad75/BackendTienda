import mongoose from 'mongoose'

// Exporta una función asincrónica llamada 'db' que se encargará de conectar a la base de datos
export const db = async () => {
    try {
        // Intenta conectarse a la base de datos MongoDB utilizando la URL proporcionada en las variables de entorno
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,          // Utiliza un analizador de URL más reciente (necesario para versiones recientes de MongoDB)
            useUnifiedTopology: true         // Utiliza una topología unificada para la administración de conexiones (recomendado)
        })
        console.log('Connected to MongoDB!') // Muestra un mensaje en la consola si la conexión a la base de datos tiene éxito
    } catch (error) {
        console.error('Error connecting to MongoDB :c', error) // Captura cualquier error y muestra un mensaje de error en la consola
    }
}
