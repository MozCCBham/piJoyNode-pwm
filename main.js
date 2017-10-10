var express = require("express");
var app = express();
rpio = require("rpio");

app.use(express.static(__dirname));

app.get("/", function(req, res) {
        res.sendFile("index.html", {root : __dirname});
})

app.get("/forwards", function(req, res) {
                rpio.write(7, rpio.HIGH);
                rpio.write(8, rpio.LOW);
                rpio.write(9, rpio.HIGH);
                rpio.write(10, rpio.LOW);
})
app.get("/backwards", function(req, res) {
                rpio.write(7, rpio.LOW);
                rpio.write(8, rpio.HIGH);
                rpio.write(9, rpio.LOW);
                rpio.write(10, rpio.HIGH);
})
app.get("/left", function(req, res) {
                rpio.write(7, rpio.HIGH);
                rpio.write(8, rpio.LOW);
                rpio.write(9, rpio.LOW);
                rpio.write(10, rpio.HIGH);
})
app.get("/right", function(req, res) {
                rpio.write(7, rpio.LOW);
                rpio.write(8, rpio.HIGH);
                rpio.write(9, rpio.HIGH);
                rpio.write(10, rpio.LOW);
})
app.get("/stop", function(req, res) {
                rpio.write(7, rpio.LOW);
                rpio.write(8, rpio.LOW);
                rpio.write(9, rpio.LOW);
                rpio.write(10, rpio.LOW);
})

app.listen(3000)


