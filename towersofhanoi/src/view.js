class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupTowers();
    }

    setupTowers() {

        for(let i = 0; i < 3; i++){
            let $ul = $("<ul>");
            $ul.attr("id", i).addClass("tower");
            this.$el.append($ul);
        }

        for(let y = 0; y < 4; y++) {
            $("ul").first().append($("<li>").addClass("disc"));
        }
    }
}

module.exports = View;
