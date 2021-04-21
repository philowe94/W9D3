const View = require("./ttt-view");
const Game = require("./game");

  $(() => {
    // Your code here
    const g = new Game();
    const $ttt = $(".ttt");
    const tttView = new View(g, $ttt);
    tttView.setupBoard();
    console.log('test');
  });
