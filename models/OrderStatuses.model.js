import mongoose from 'mongoose';

const orderStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String
}, {versionKey:false});

const OrderStatuses = mongoose.model('OrderStatuses', orderStatusSchema);

export default OrderStatuses;
