const express = require("express");
const app = express();
const path = require("path");



require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('view engine' , 'ejs');
const PORT = process.env.PORT || 3000;








const connectDB = require("./config/connectDB");

connectDB(process.env.MONGO_URL);

const keyRoute = require("./routes/keyAuth");


app.use(keyRoute);

app.get("/" , async (req , res) => {
   res.send("Hello world");
});



app.listen(PORT , async (req ,  res) => {
  console.log(`Server running on port${PORT}`);
});