import dotenv from "dotenv";
dotenv.config()
import express from "express"
import cors from "cors";
import helmet from "helmet";
import axios from "axios";

const app = express()
app.use(cors())
app.use(helmet())

app.use("/api/search", async (req, res) => {
  console.log("Location", req.query.location)
  try {
    const endPoint = `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.API_TOKEN
      }&q=${req.query.location}&limit=${req.query.limit || 10}`;
    console.log("endPoint", endPoint)
    const results = await axios.get(endPoint);
    if (results.data) return res.send(results.data)
    res.send([])
  } catch (error) {
    console.log(error)
    res.send([])
  }
});

app.use("/", (req, res) => {
  res.send("hello there")
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Listening on port ", port))