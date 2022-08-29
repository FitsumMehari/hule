const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const blogRoute = require('./routes/blog');
const orderRoute = require('./routes/order');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(
    process.env.DBURL
).then(
    () => {
        console.log("DB connected successfully!");
    }
).catch(
    (error) => {
        console.log(error);
    }
)

//STATIC FILES
app.use('/', express.static('./dist/gift-shop'));

//ROUTES

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/blogs', blogRoute);
app.use('/api/order', orderRoute);

//ROUTE NOT FOUND
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

//ERROR
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port: ${process.env.PORT || 3000}`);
});
