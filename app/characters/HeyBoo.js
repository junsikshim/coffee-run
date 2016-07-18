import Character from "./Character"
import RunAction from "../actions/Run"
import HeyBooAction from "../actions/HeyBoo"

export default class extends Character {
    constructor(game, lane) {
        super(game, lane, "heyboo");

        this.attributes = {
            actions: [{
                actionObject: new RunAction(this, 0.6),
                duration: 500,
                percentage: 90
            }, {
                actionObject: new HeyBooAction(this, 0.6),
                duration: 10,
                percentage: 10
            }]
        };

        this.animations.add("run", Phaser.Animation.generateFrameNames("heyboo_f", 1, 10, ".png", 2), 12, true);

        this.gameState.characterGroup.add(this);
    }
}