import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGODB_URI;

if (!connection_url) {
  console.error("MONGODB_URI environment variable is required");
  process.exit(1);
}

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/tinder/cards", async (req, res) => {
  try {
    const dbCard = req.body;
    const data = await Cards.create(dbCard);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/tinder/cards", async (req, res) => {
  try {
    const data = await Cards.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
