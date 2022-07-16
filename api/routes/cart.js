const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const Cart = require('../models/Cart');

//CREATE NEW CART
router.post('/create', verifyToken, async (req, res) => {
    if (!req.body) {
        res.status(400).json("Please fill the required inputs!")
    } else {
        try {
            const newCart = new Cart(req.body);
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);

        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//UPDATE CART
router.put('/update', verifyTokenAndAuthorization, async (req, res) => {
    if (!req.body) {
        res.status(400).json("Please fill the required inputs!")
    } else {
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedCart);

        } catch (error) {
            res.status(500).json(error);
        }
    }
});

//DELETE CART
router.delete('/delete/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart deleted...');
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET USER CART
router.get('/getcart/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const userCart = await Cart.findOne({
            userId: req.params.userId
        });
        res.status(200).json(userCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL CARTS
router.get('/getallcarts', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router