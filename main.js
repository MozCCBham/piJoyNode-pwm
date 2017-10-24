var express = require("express");
var app = express();
var wpi = require("wiringpi-node")

wpi.wiringPiSetupGpio()

app.use(express.static(__dirname));

app.get("/", function(req, res) {
        res.sendFile("index.html", {root : __dirname});
        wpi.pinMode(7, wpi.OUTPUT);
        wpi.pinMode(8, wpi.OUTPUT);
        wpi.pinMode(9, wpi.OUTPUT);
        wpi.pinMode(10, wpi.OUTPUT);
})

app.get("/forwards", function(req, res) {
        wpi.pinMode(7, wpi.OUTPUT);
        wpi.pinMode(8, wpi.OUTPUT);
        wpi.pinMode(9, wpi.OUTPUT);
        wpi.pinMode(10, wpi.OUTPUT);
	console.log("forwards")
        wpi.digitalWrite(7, wpi.HIGH);
        wpi.digitalWrite(8, wpi.LOW);
        wpi.digitalWrite(9, wpi.HIGH);
        wpi.digitalWrite(10, wpi.LOW);
})
app.get("/forwardsleft", function(req, res) {
	console.log("forwards left")
        wpi.digitalWrite(7, wpi.HIGH);
        wpi.digitalWrite(8, wpi.LOW);
        wpi.digitalWrite(9, wpi.LOW);
        wpi.digitalWrite(10, wpi.LOW);
})
app.get("/forwardsright", function(req, res) {
	console.log("forwards left")
        wpi.digitalWrite(7, wpi.LOW);
        wpi.digitalWrite(8, wpi.LOW);
        wpi.digitalWrite(9, wpi.HIGH);
        wpi.digitalWrite(10, wpi.LOW);
})
app.get("/backwards", function(req, res) {
	console.log("backwards")
        wpi.digitalWrite(7, wpi.LOW);
        wpi.digitalWrite(8, wpi.HIGH);
        wpi.digitalWrite(9, wpi.LOW);
        wpi.digitalWrite(10, wpi.HIGH);
})
app.get("/backwardsleft", function(req, res) {
	console.log("forwards left")
        wpi.digitalWrite(7, wpi.LOW);
        wpi.digitalWrite(8, wpi.HIGH);
        wpi.digitalWrite(9, wpi.LOW);
        wpi.digitalWrite(10, wpi.LOW);
})
app.get("/backwardsright", function(req, res) {
	console.log("forwards left")
        wpi.digitalWrite(7, wpi.LOW);
        wpi.digitalWrite(8, wpi.LOW);
        wpi.digitalWrite(9, wpi.LOW);
        wpi.digitalWrite(10, wpi.HIGH);
})
app.get("/left", function(req, res) {
        wpi.digitalWrite(7, wpi.HIGH);
        wpi.digitalWrite(8, wpi.LOW);
        wpi.digitalWrite(9, wpi.LOW);
        wpi.digitalWrite(10, wpi.HIGH);
	console.log("left")
})
app.get("/right", function(req, res) {
	console.log("right")
        wpi.digitalWrite(7, wpi.LOW);
        wpi.digitalWrite(8, wpi.HIGH);
        wpi.digitalWrite(9, wpi.HIGH);
        wpi.digitalWrite(10, wpi.LOW);
})
app.get("/stop", function(req, res) {
	console.log("stop")
        wpi.digitalWrite(7, wpi.LOW);
        wpi.digitalWrite(8, wpi.LOW);
        wpi.digitalWrite(9, wpi.LOW);
        wpi.digitalWrite(10, wpi.LOW);
})

app.listen(3000)


