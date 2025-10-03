const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.send('Home');
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
