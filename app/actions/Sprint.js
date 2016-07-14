import Action from "./Action"

export default class extends Action {
    constructor(character, speed) {
        super(character, 5);

        this.speed = speed;
    }

    execute() {
        this.character.play("sprint");
    }

    update() {
        this.character.x += this.speed;
    }
}