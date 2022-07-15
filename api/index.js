const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

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

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port: ${process.env.PORT} or 3000`);
});