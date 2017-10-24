var wpi = require("wiringpi-node")

wpi.wiringPiSetupGpio()
wpi.pinMode(7, wpi.OUTPUT);
wpi.pinMode(8, wpi.OUTPUT);
wpi.pinMode(9, wpi.OUTPUT);
wpi.pinMode(10, wpi.OUTPUT);
wpi.digitalWrite(7, wpi.LOW);
wpi.digitalWrite(8, wpi.LOW);
wpi.digitalWrite(9, wpi.LOW);
wpi.digitalWrite(10, wpi.LOW);
