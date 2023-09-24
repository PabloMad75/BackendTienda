import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {versionKey:false});

const Categories = mongoose.model('Categories', categorySchema);

export default Categories;
