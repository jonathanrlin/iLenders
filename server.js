const path = require("path");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/dist")));

require("./server/routes/index")(app);
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dist/index.html"));
});

app.listen(3000, () => console.log("listening on port 3000"));
