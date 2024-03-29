const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//import routes
const postRoutes = require("./routes/posts");

//app middleware
app.use(cors());
app.use(bodyParser.json());

app.use(postRoutes);

app.get("/", (req, res) => {
  res.send("<b>Backend</b>");
});

const PORT = process.env.PORT || 8070;
const MONGODB_URL =
  "mongodb+srv://kavindu:kavindu2973@crud.gasww.mongodb.net/mernCrud?retryWrites=true&w=majority";
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
