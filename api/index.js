const express = require("express");
const app = express();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("DB connectiion successful")
    }
).catch(
    (e) => {
        console.log(e)
    }
)


app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


app.get("/testRout", (req, res) => {
    res.json({
        "statusCode": 200,
        "statusMessage": "THIS IS TEST RESPONSE!"
    })
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running at port ${process.env.PORT || 5000} .`);
})