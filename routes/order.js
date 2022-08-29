const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const Order = require('../models/Order');
const Product = require('../models/Product');

//CREATE NEW ORDER
router.post('/create', verifyToken, async (req, res) => {
  if (!req.body) {
    res.status(400).json("Please fill the required inputs!")
  } else {
    try {
      // Code to check the validity of the payment goes here



      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      res.status(200).json({ "message": "success", ...savedOrder._doc });
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

//UPDATE ORDER
router.put('/update/:id', verifyTokenAndAdmin, async (req, res) => {
  if (!req.body) {
    res.status(400).json("Please fill the required inputs!")
  } else {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true });
      res.status(200).json(updatedOrder);

    } catch (error) {
      res.status(500).json(error);
    }
  }
});

//DELETE ORDER
router.delete('/delete/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted...');
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER ORDER
router.get('/getorder/:userId', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const userOrder = await Order.findOne({
      userId: req.params.userId
    });
    res.status(200).json(userOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ORDER PRICE
router.post('/getFinalPrice', verifyToken, async (req, res) => {
  try {
    var price = 0;
    var calcIsDone = false;
    const order = await Order.findById(req.body.orderId);

    try {
      order.products.forEach(async (product) => {
        const orderProduct = await Product.findById(product.productId);
        price += (orderProduct.ItemPrice * product.quantity);
        if ((order.products.length - order.products.indexOf(product)) === 1) {
          return res.status(200).json(price);
        }
      })
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL ORDERS
router.get('/getallorders', verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, async (req, res) => {

  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount'
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' }
        }
      }
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router
