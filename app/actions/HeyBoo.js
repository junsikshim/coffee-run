import Action from "./Action"

export default class extends Action {
    constructor(character, speed) {
        super("heyboo", character);

        this.message = "헤이부!";
        this.speed = speed;
    }

    execute() {
        var character = this.character;
        var characters = character.game.state.getCurrentState().characters;
        var closestCharacter = null;
        var closestPos = 9999999;

        for (let c of characters) {
            if (c.getPosX() > character.getPosX() && c.getPosX() < closestPos) {
                closestPos = c.getPosX();
                closestCharacter = c;
            }
        }

        if (closestCharacter)
            this.character.setPosX(closestCharacter.getPosX());
    }

    update() {
        this.character.x += this.speed;
    }
}