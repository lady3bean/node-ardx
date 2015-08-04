var five = require("johnny-five"),
    board, piezo, pot;

board = new five.Board({
  debug: true
});

board.on("ready", function() {

  piezo = new five.Piezo(9);

  pot = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  pot
    // .scale(261, 523)
    .on("change", function() {
      
    piezo.tone( this.value, 500);
    console.log(this.value, this.raw);
  });

});
