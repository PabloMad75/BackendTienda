import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
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
  status: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderStatuses' }
}, {versionKey:false});

const Orders = mongoose.model('Orders', orderSchema);

export default Orders;
