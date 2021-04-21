class View {
  constructor(game, $el) {
    this.game = game;
    
    this.$el = $el;
  }
    
  bindEvents() {
    $("ul").on("click", "li", (e) => {
      let pos = $(e.currentTarget).data("pos").split(',').map((el) => parseInt(el));
      this.game.playMove(pos);
    });
  }

  makeMove($square) {}

  setupBoard() {
    let $grid = $("<ul>");
    this.$el.append($grid);

    $("ul").attr("id", "grid");
    for (let i=0; i<3; i++) {
      for(let y=0; y<3; y++) {
        const $square = $("<li>").attr("data-pos", [i, y])
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
