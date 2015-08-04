var five = require("johnny-five");
var board;
var servo;

board = new five.Board();

board.on("ready", function() {

  var flexSensor = new five.Sensor({
    pin: "A0",
  });

  var servo = new five.Servo(9);

  flexSensor
  .on("change", function(value, error) {
    console.log(this.value);
    servo.to(this.value);
  });
});
