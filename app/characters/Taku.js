import Character from "./Character"
import RunAction from "../actions/Run"
import HeartBeamAction from "../actions/HeartBeam"

export default class extends Character {
    constructor(game, lane) {
        super(game, lane, "taku");

        this.attributes = {
            actions: [{
                actionObject: new RunAction(this, 0.75),
                duration: 500,
                percentage: 85
            }, {
                actionObject: new HeartBeamAction(this),
                duration: 0,
                percentage: 15
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("taku_f", 1, 8, ".png", 2), 12, true);

        this.gameState.characterGroup.add(this);
    }
}