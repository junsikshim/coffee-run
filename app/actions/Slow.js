import Action from "./Action"

export default class extends Action {
    constructor(character) {
        super("slow", character);

        this.speed = 0.2;
    }

    execute() {
        this.character.play("run");
    }

    update() {
        this.character.x += this.speed;
    }
}