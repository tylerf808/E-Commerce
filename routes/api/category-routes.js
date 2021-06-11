const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
    // find all categories
    // be sure to include its associated Products
    const categories = await Category.findAll({ include: { model: Product } });
    res.status(200).json(categories);
});

router.get('/:id', async(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    const category = await Category.findbyPK(req.params.id, { include: { model: Product } });
    res.status(200).json(category);
});

router.post('/', async(req, res) => {
    // create a new category
    const body = req.body;
    const newCategory = await Category.create(body);
    res.status(200).json(newCategory);
});

router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    const updatedCat = await Category.update({ category_name: req.body.category_name }, { where: { id: req.params.id } });
    res.status(200).json(updatedCat);
});

router.delete('/:id', async(req, res) => {
    // delete a category by its `id` value
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json(deleted);
});

module.exports = router;