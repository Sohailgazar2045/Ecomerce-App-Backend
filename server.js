import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import catagoryRoute from "./routes/catagoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";

dotenv.config();

connectDb();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/catagory", catagoryRoute);
app.use("/api/v1/product", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>Wellcome to Ecomerce App<h1/>");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
