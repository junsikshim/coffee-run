import Character from "./Character"
import RunAction from "../actions/Run"
import StarAction from "../actions/Star"

export default class extends Character {
    constructor(game, lane) {
        super(game, lane, "fabio");

        this.attributes = {
            actions: [{
                action: new RunAction(this, 0.75),
                duration: 500,
                percentage: 90
            }, {
                action: new StarAction(this, 1),
                duration: 1400,
                percentage: 10
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("fabio_f", 1, 8, ".png", 2), 12, true);
        this.animations.add("star", Phaser.Animation.generateFrameNames("fabio_speedup_f", 1, 8, ".png", 2), 15, true);
        this.animations.add("hit", Phaser.Animation.generateFrameNames("fabio_f", 1, 1, ".png", 2), 5, true);

        this.game.add.existing(this);
    }
}