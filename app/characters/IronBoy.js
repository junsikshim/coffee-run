import Character from "./Character"
import RunAction from "../actions/Run"
import BeamAction from "../actions/Beam"

export default class extends Character {
    constructor(game, lane) {
        super(game, lane, "iron-boy");

        this.attributes = {
            actions: [{
                action: new RunAction(this, 0.7),
                duration: 500,
                percentage: 90
            }, {
                action: new BeamAction(this, 0.5),
                duration: 600,
                percentage: 10
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("ironboy_f", 1, 8, ".png", 2), 12, true);
        this.animations.add("beam", Phaser.Animation.generateFrameNames("ironboy_boost_f", 1, 5, ".png", 2), 5, true);

        this.game.add.existing(this);
    }
}