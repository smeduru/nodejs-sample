const express = require('express');
const hbs = require('hbs')

var __dirname = '/Users/smeduru/samples/nodejs/webserver1';

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper("toUpper", (text) => {
    return text.toUpperCase();
})

var app = express();
app.set("view engine", hbs);
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url} `)
    next();
    //res.render('maintenance.hbs');
});
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('index.hbs', {
        pageTitle: "Index Page"
    })
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: 'About Page'
    });
});

app.get("/home", (req, res) => {
    res.render("home.hbs", {
        pageTitle: 'Home Page'
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Starting webserver on port 3000!");
});