import Character from "./Character"
import RunAction from "../actions/Run"
import SprintAction from "../actions/Sprint"

export default class extends Character {
    constructor(game, x, y) {
        super(game, x, y, "coffee-boy");

        this.attributes = {
            actions: [{
                action: new RunAction(this, 3),
                duration: 500,
                percentage: 80
            }, {
                action: new SprintAction(this, 5),
                duration: 1200,
                percentage: 20
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("coffeeboy_f", 1, 8, ".png", 2), 10, true);
        this.animations.add("sprint", Phaser.Animation.generateFrameNames("coffeeboy_f", 1, 8, ".png", 2), 5, true);

        this.game.add.existing(this);
    }
}