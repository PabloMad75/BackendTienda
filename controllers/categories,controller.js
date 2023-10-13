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

// Buscar categoría por nombre
export const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id; // Obtener el nombre desde los parámetros
    const category = await Categories.findOne({ _id: categoryId });

    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la categoría por nombre' });
  }
};

// Actualizar categoría por nombre
export const updateCategoryByName = async (req, res) => {
  try {
    const categoryName = req.params.name;
    const updateData = req.body;
    const updatedCategory = await Categories.findOneAndUpdate(
      { name: categoryName },
      updateData,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(202).json({ message: `Categoría ${updatedCategory.name} actualizada con éxito` });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoría por nombre' });
  }
};

// Eliminar categoría por nombre
export const deleteCategoryByName = async (req, res) => {
  try {
    const categoryName = req.params.name;
    const removedCategory = await Categories.findOneAndDelete({ name: categoryName });

    if (!removedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(202).json({ message: `Categoría ${removedCategory.name} eliminada con éxito` });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoría por nombre' });
  }
};
