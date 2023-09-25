import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
  image: String // Nueva clave "image" para la URL de la imagen del producto
}, {versionKey:false});

const Products = mongoose.model('Products', productSchema);

export default Products;
