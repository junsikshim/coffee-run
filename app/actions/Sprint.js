import Action from "./Action"

export default class extends Action {
    constructor(character, speed) {
        super("sprint", character);

        this.message = "샷 추가요!";
        this.speed = speed;
    }

    execute() {
        this.character.play("sprint");
    }

    update() {
        this.character.x += this.speed;
    }
}