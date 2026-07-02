const express = require("express");
const app = express();

const product = require("./Product");
const customer = require("./Customer");
const employee = require("./Employee");
const payment = require("./Payment");

app.use("/product", product);
app.use("/customer", customer);
app.use("/employee", employee);
app.use("/payment", payment);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});