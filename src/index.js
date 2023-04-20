const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Router = require("./Router/Router");
const multer = require("multer")
mongoose
  .connect(
    "mongodb+srv://Rsangram890:hPZbgpmJvegZil8Q@cluster0.osqcdhn.mongodb.net/INSURED?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use("/", Router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
