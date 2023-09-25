import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  orderDate: {
    type: Date,
    required: true
  },
  status: { type: mongoose.Schema.Types.ObjectId, ref: 'orderstatuses' }
}, {versionKey:false});

const Orders = mongoose.model('orders', orderSchema);

export default Orders;
