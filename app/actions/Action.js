import Character from "../characters/Character"

export default class {
    constructor(key, character) {
        this.key = key;
        this.character = character;
        this.isDefault = false;
    }

    preExecute(srcAction, srcCharacter) {
        if (this.character.state === Character.STATE_DONE)
            return false;

        if (srcCharacter === this.character)
            return true;

        return true;
    }

    execute() {

    }

    postExecute() {

    }

    update() {

    }
}