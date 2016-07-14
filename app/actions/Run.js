import Action from "./Action"

export default class extends Action {
    constructor(character, speed) {
        super("run", character);

        this.speed = speed;
    }

    execute() {
        this.character.play("run");
    }

    update() {
        this.character.x += this.speed;
    }
}