import Phaser from "phaser"

export default class Character extends Phaser.Sprite {
    constructor(game, lane, key) {
        let x = lane * -20 + 132;
        let y = lane * 38 + 110;

        super(game, x, y, key);

        this.gameState = game.state.getCurrentState();
        this.state = Character.STATE_INIT;
        this.actions = [];
        this.curAction = null;
        this.lane = lane;
        this.totalActionCount = 0;
    }

    get attributes() {
        return this.attrs;
    }

    set attributes(attrs) {
        this.attrs = attrs;
        this.actions = attrs.actions;
    }

    getPosX() {
        return this.x + this.lane * 20;
    }

    setPosX(x) {
        this.x = x - this.lane * 20;
    }

    start() {
        this.state = Character.STATE_STARTED;
        this.action();
    }

    action() {
        let percentage = 0;
        let rnd = this.game.rnd.integerInRange(0, 100);

        for (let action of this.actions) {
            if (this.totalActionCount !== 0)
                percentage += action.percentage;
            else
                percentage = 100;

            if (rnd < percentage) {
                this._applyAction(action, true);
                this.totalActionCount++;

                break;
            }
        }
    }

    preApplyAction(srcAction, srcCharacter) {
        if (this.curAction)
            return this.curAction.actionObject.preExecute(srcAction, srcCharacter);

        return true;
    }

    applyAction(action, srcCharacter) {
        let doExecute = this.preApplyAction(action, srcCharacter);

        if (doExecute) {
            this._applyAction(action, false);
        }
    }
    
    _applyAction(action, isOwn) {
        var actionObj = action.actionObject;

        if (!actionObj.isDefault && isOwn)
            this.gameState.onCharacterAction(this, action);

        this.curAction = action;
        actionObj.execute(this);

        this.game.time.events.remove(this.curActionTimer);
        this.curActionTimer = this.game.time.events.add(action.duration, () => {
            this.curAction.actionObject.postExecute();
            this.curAction = null;
        });
    }

    update() {
        if (this.state !== Character.STATE_STARTED)
            return;

        if (this.getPosX() > 1255) {
            this.state = Character.STATE_DONE;
            this.animations.stop();
            this.game.state.getCurrentState().onCharacterFinish(this);
            return;
        }

        if (this.curAction)
            this.curAction.actionObject.update();
        else
            this.action();
    }
}

Character.STATE_INIT = 0;
Character.STATE_READY = 1;
Character.STATE_STARTED = 2;
Character.STATE_RUN = 3;
Character.STATE_SPRINT = 4;
Character.STATE_TRANSFORM = 5;
Character.STATE_WALK = 6;
Character.STATE_HIT = 7;
Character.STATE_DONE = 8;