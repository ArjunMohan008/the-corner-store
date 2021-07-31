const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})