const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

// placed in .env file in imp project
const publicVapidKey =
  "BPnDVWkFDeuBkb8I7ugtJ-PEG_XbUUNh-GdNPU3I6bhhqYp4N4E73ITwvijp4RfKVHD6mQgunZrKO-Hj-Nk6k1A";
const privateVapidKey = "xpxKb7jELggOJxcsn08_u0zuLbZHgzDu4GbG1npmBA8";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // get pushSubscription Object
  const subscription = req.body;

  //send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.log(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
