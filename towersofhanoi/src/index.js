const HanoiGame = require("./game.js");
const View = require("./view");

$(() => {
  const rootEl = $('.toh');
  const game = new HanoiGame();
  new View(game, rootEl);


});
