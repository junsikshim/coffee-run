import Character from "./Character"
import RunAction from "../actions/Run"
import SprintAction from "../actions/Sprint"

export default class extends Character {
    constructor(game, lane) {
        super(game, lane, "coffee-boy");

        this.attributes = {
            actions: [{
                action: new RunAction(this, 0.8),
                duration: 500,
                percentage: 90
            }, {
                action: new SprintAction(this, 1.1),
                duration: 900,
                percentage: 10
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("coffeeboy_f", 1, 8, ".png", 2), 12, true);
        this.animations.add("sprint", Phaser.Animation.generateFrameNames("coffeeboy_f", 1, 8, ".png", 2), 20, true);
        this.animations.add("hit", Phaser.Animation.generateFrameNames("coffeeboy_f", 1, 1, ".png", 2), 5, true);

        this.game.add.existing(this);
    }
}