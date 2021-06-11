const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
    // find all tags
    // be sure to include its associated Product data
    const tags = await Tag.findAll({ include: [{ model: Product, through: ProductTag }] });
    res.status(200).json(tags);
});

router.get('/:id', async(req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tag = await Tag.findByPk(req.params.id, { include: [{ model: Product, through: ProductTag }] })
    res.status(200).json(tag);
});

router.post('/', async(req, res) => {
    // create a new tag
    const body = req.body;
    const newTag = await Tag.create(body);
    res.status(200).json(newTag);
});

router.put('/:id', async(req, res) => {
    // update a tag's name by its `id` value
    const updateTag = await Tag.update({ name: req.body.name }, { where: { id: req.params.id } });
    res.status(200).json(updateTag);
});

router.delete('/:id', async(req, res) => {
    // delete on tag by its `id` value
    const deletedTag = Tag.destroy({ where: { id: req.params.id } })
    res.status(200).json(deletedTag);
});

module.exports = router;