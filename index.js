const express = require("express");
const https = require("https");

var app = express();
app.set("view engine", "ejs");

app.use("/", (req, res) => {
   res.json({message: "hello vercel koo..."});
});
app.listen(3000, function(){
   console.log("server is running at port 3000...");
})