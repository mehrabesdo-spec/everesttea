const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const teas = require("./data/teas.json");

app.get("/api/teas", (req, res) => res.json(teas));

app.get("/checkout", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "checkout.html"))
);

app.post("/api/orders", (req, res) => {
  const { name, phone, address, items } = req.body || {};
  if (!name || !phone || !address || !Array.isArray(items) || !items.length) {
    return res.status(400).json({ error: "Missing order details." });
  }
  const id = "ET-" + Date.now().toString(36).toUpperCase();
  res.status(201).json({ success: true, orderId: id });
});

app.listen(PORT, () =>
  console.log(`Everest Tea brewing at http://localhost:${PORT}`)
);
