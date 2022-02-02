const express = require("express");
const productRouter = require("./apis/products/routes");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/products", productRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
