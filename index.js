const express = require("express");
const app = express();
let port = 7000;

const packages = require("./data/tour");

app.get("/",(req,res) => {
    res.send("Hello WOrld");
});

app.get("/",(req,res) => {
    res.json(packages);
})
app.listen(port,() => {
  console.log(`Server is running on port ${port}`);
});