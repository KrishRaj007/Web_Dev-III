const express = require("express");
const app = express();
// let port = 7000;

// const packages = require("./data/tour");

// app.get("/",(req,res) => {
//     res.send("Hello World");
// });

// app.get("/packages",(req,res)=>{
//     res.json(packages);
// });

// app.get("/packages/:id",(req,res)=>{
//     const packagesId = parseInt(req.params.id);
//     const selectedPackages = packages.find(item => item.id === packagesId);
//     res.json(selectedPackages);
// });

// app.get("/packages", (req, res) => {
//     const {des} = req.query;

//     if (des) {
//         const filtered = packages.filter((pkg) =>
//             pkg.name.includes(des) |
//         pkg.description.iclude(des));
//         return res.json(filtered);

//     }
//       res.json(packages);
// });

// app.listen(port,() => {
//   console.log(`Server is running on port ${port}`);
// });

const tourRoutes = require('./routes/tourRoutes');

app.use(express.json());
app.use('/api', tourRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})