import Action from "./Action"

export default class extends Action {
    constructor(character, speed) {
        super("star", character);

        this.message = "잇츠 미! 파비오!";
        this.speed = speed;
    }

    execute() {
        this.character.play("star");
    }

    update() {
        this.character.x += this.speed;
    }
}