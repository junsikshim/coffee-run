import Action from "./Action"

export default class extends Action {
    constructor(character, speed) {
        super(character);

        this.speed = speed;
    }

    execute() {
        this.character.play("run");
    }
}