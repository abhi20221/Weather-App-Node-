const express = require("express");
const path = require("path");
const app = express();
const router = require("../routers/weather.js");
const hbs = require("hbs");

const publicPath = path.join(__dirname,"../public");
const partialsPath = path.join(__dirname,"/views/partials");
const viewsPath = path.join(__dirname,"/views/templates");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.use(router);
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.listen(port,()=>{
    console.log("Server is up on port "+port);
})