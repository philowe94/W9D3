class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.currTower = null;
        this.setupTowers();
        this.render();
        this.clickTower();
    }

    setupTowers() {

        for (let i = 0; i < 3; i++) {
            let $ul = $("<ul>");
            $ul.attr("data-num", i).addClass("tower").addClass("deselected");
            this.$el.append($ul);
        }

        for (let y = 3; y > 0; y--) {
            $("ul").first().append($("<li>").attr("data-size", y).addClass("disc").text(y.toString()));
        }
    }

    render() {
        $("li").remove();

        let towers = this.game.towers;
        for (let i=0; i<towers.length; i++) {
            for (let j=0; j<towers[i].length; j++) {
                let size = towers[i][j];
                let $li = $("<li>");
                $li.attr("data-size", size).addClass("disc").css("width", size*20).text(size.toString());
                $($("ul")[i]).append($li);
                
            }
        }
    }

    clickTower() {

        let $towers = $("ul");
        $towers.on("click", (e) => {
            // debugger
            if (this.currTower === null) {
                this.currTower = $(e.currentTarget).data("num");
                $(e.currentTarget).toggleClass("selected deselected")
            } else {
                // debugger;
                let endTower = $(e.currentTarget).data("num");
                this.game.move(this.currTower, endTower);

                $($("ul")[this.currTower]).toggleClass("selected deselected")
                this.render();
                this.currTower = null;
            }
        });
        
    }

}

module.exports = View;
