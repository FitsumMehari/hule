const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const blogRoute = require('./routes/blog');

dotenv.config();
  
const app = express();
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


app.use('/', express.static('../dist'))
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/blog', blogRoute);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port: ${process.env.PORT || 3000}`);
});