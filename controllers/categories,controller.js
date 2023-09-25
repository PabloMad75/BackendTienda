import Categories from '../models/Categories.model.js';


export const getAllCategories = async (req, res) => {
  try {
    const AllCategories = await Categories.find()
    console.log(AllCategories)
    res.status(200).json(AllCategories)
  } catch (error) {
    res.status(400).json({message: "No se encontro nada "})
  }
}