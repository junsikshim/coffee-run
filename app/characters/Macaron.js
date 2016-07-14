import Character from "./Character"
import RunAction from "../actions/Run"
import SugarAction from "../actions/Sugar"

export default class extends Character {
    constructor(game, lane) {
        super(game, lane, "macaron");

        this.attributes = {
            actions: [{
                action: new RunAction(this, 0.6),
                duration: 500,
                percentage: 90
            }, {
                action: new SugarAction(this, 0.6),
                duration: 2000,
                percentage: 10
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("macaron_f", 1, 8, ".png", 2), 12, true);
        this.animations.add("hit", Phaser.Animation.generateFrameNames("macaron_f", 1, 1, ".png", 2), 5, true);

        this.game.add.existing(this);
    }
}