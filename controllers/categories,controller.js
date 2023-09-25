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

export const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const category = new Categories(newCategory);
    const setCategory = await category.save();
    res
      .status(201)
      .json({
        message: `Categoría ${setCategory.name} creada con éxito`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: `El registro No se logró grabar con éxito` });
  }
};