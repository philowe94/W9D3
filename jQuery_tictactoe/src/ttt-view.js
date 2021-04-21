class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }
    
  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $grid = $("<ul>");
    this.$el.append($grid);

    $("ul").css("display", "flex");
    $("ul").css("flex-wrap", "wrap");
    $("ul").css("width", "300");
    for (let i=0; i<9; i++) {
      $("ul").append($("<li>").text("test"));
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

  }
}

module.exports = View;
