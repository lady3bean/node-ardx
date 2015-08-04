var five = require("johnny-five");
var board;
var potentiometer;
var servo;

board = new five.Board();

board.on("ready", function() {

  potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  board.repl.inject({
    pot: potentiometer
  });

  servo = new five.Servo(9);

  board.repl.inject({
    servo: servo
  });

  potentiometer
  .scale(0, 180)
  .on("change", function() {
    servo.to(this.value);
    console.log(this.value, this.raw);

  });
});