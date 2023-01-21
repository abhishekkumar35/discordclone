const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { badRequestHandler } = require("./Middleware/BadRequestHandler");
const authRoutes = require("./Routes/authRoutes");
require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(badRequestHandler);

app.use(cors());

app.use("/api/auth/", authRoutes);
const server = http.createServer(app);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL2)
  .then(() => {
    console.log("Database connection established");
    server.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  })
  .catch((err) => console.error(err));
