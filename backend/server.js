const express = require('express')
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoute");

connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productRoute);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})