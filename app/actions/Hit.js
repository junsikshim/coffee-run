import Action from "./Action"

export default class extends Action {
    constructor(character) {
        super(character);

        this.speed = 0;
    }

    execute() {
        this.character.play("hit");
    }

    update() {

    }
}