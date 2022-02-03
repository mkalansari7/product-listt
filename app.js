const express = require("express");
const productRouter = require("./apis/products/routes");
const connectDB = require("./database");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/products", productRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running", PORT);
  connectDB();
});
