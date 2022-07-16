const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const Product = require('../models/Product');

//CREATE NEW PRODUCT
router.post('/create', verifyTokenAndAdmin, async (req, res) => {
    if (!req.body) {
        res.status(400).json("Please fill the required inputs!")
    } else {
        try {
            const newProduct = new Product(req.body);
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);

        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//UPDATE PRODUCT
router.put('/update/:id', verifyTokenAndAdmin, async (req, res) => {
    if (!req.body) {
        res.status(400).json("Please fill the required inputs!")
    } else {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedProduct);

        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//DELETE PRODUCT
router.delete('/delete/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product has been deleted...');
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET PRODUCT
router.get('/get/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET PRODUCTS
router.get('/getall', async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    let products;
    try {
        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(10);
        } else if (queryCategory) {
            products = await Product.find({
                category: {
                    $in: [queryCategory]
                }
            })
        } else {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router