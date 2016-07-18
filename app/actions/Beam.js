import Action from "./Action"
import HitAction from "./Hit"

export default class extends Action {
    constructor(character, speed) {
        super("beam", character);

        this.message = "아임 아이언보이!";
        this.speed = speed;
    }

    execute() {
        var character = this.character;

        character.play("beam");

        var characters = character.game.state.getCurrentState().characters;

        for (let c of characters) {
            if (c.getPosX() > character.getPosX()) {
                let action = {
                    actionObject: new HitAction(c),
                    duration: 2000
                };

                c.applyAction(action);
            }
        }
    }

    update() {
        this.character.x += this.speed;
    }
}