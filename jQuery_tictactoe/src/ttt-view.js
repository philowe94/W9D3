class View {
  constructor(game, $el) {
    this.game = game;
    
    this.$el = $el;
  }
    
  bindEvents() {
    $("ul").on("click", "li", (e) => {
      let pos = $(e.currentTarget).data("pos").split(',').map((el) => parseInt(el));
      this.makeMove($(e.currentTarget));
      this.game.playMove(pos);
      if (this.game.isOver()) {
        alert(this.game.winner() + ' wins!');
      }
    });
  }
  
  makeMove($square) {
    if ($square.hasClass("white")) {
      alert('Square is taken. Please pick valid square!');
      
    } else {
      $square.removeClass();
      $square.addClass("white");
      let currentPlayer = this.game.currentPlayer;
      $square.text(currentPlayer);
    }
  }

  setupBoard() {
    let $grid = $("<ul>");
    this.$el.append($grid);

    $("ul").attr("id", "grid");
    for (let i=0; i<3; i++) {
      for(let y=0; y<3; y++) {
        const $square = $("<li>").attr("data-pos", [i, y]);
        $("ul").append($square);
      }
    }

    $("li").css("width", "90");
    $("li").css("height", "90");
    $("li").css("border", "2px solid black");
    $("li").addClass("grey");

    const toggleHover = (e) => {
      const $li = $(e.currentTarget);
      $li.toggleClass("yellow grey");
    }
    $("ul").on("mouseover", "li", toggleHover)
    $("ul").on("mouseleave", "li", toggleHover)

    this.bindEvents();
  }
}

module.exports = View;
