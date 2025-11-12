import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/vpngate", async (req, res) => {
  try {
    const response = await fetch("http://www.vpngate.net/api/iphone/");
    const text = await response.text();

    res.set("Access-Control-Allow-Origin", "*");
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching VPNGate data");
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
