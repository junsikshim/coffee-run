import Character from "../characters/Character"

export default class {
    constructor(key, character) {
        this.key = key;
        this.character = character;
    }

    preExecute(source, target) {
        if (!target)
            return false;

        if (target.state === Character.STATE_DONE)
            return false;

        if (source === target)
            return true;

        if (target.curAction && target.curAction.key === "star")
            return false;

        return true;
    }

    execute() {

    }

    postExecute() {

    }

    update() {

    }
}