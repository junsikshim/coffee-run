import Phaser from "phaser"

export default class Character extends Phaser.Sprite {
    constructor(game, x, y, key) {
        super(game, x, y, key);

        this.state = Character.STATE_INIT;
        this.actions = [];
        this.curAction = null;
    }

    get attributes() {
        return this.attrs;
    }

    set attributes(attrs) {
        this.attrs = attrs;
        this.actions = attrs.actions;
    }

    start() {
        this.action();
    }

    preAction() {

    }

    action() {
        if (this.curAction) {
            this.curAction.execute();

        } else {
            let percentage = 0;
            let rnd = this.game.rnd.integerInRange(0, 100);

            for (var action of this.actions) {
                percentage += action.percentage;

                if (rnd < percentage) {
                    console.log(action.action);
                    this.curAction = action.action;
                    this.curAction.preExecute();
console.log("duration", action.duration);
                    this.curActionTimer = this.game.time.events.add(action.duration, () => {
                        console.log("curAction", this.curAction);
                        this.curAction.postExecute();
                        this.curAction = null;
                    });

                    break;
                }
            }

            this.action();
        }
    }

    postAction() {

    }
}

Character.STATE_INIT = 0;
Character.STATE_READY = 1;
Character.STATE_NORMAL = 2;
Character.STATE_RUN = 3;
Character.STATE_SPRINT = 4;
Character.STATE_TRANSFORM = 5;
Character.STATE_WALK = 6;
Character.STATE_HIT = 7;
Character.STATE_DONE = 8;