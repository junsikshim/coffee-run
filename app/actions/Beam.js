import Action from "./Action"
import HitAction from "./Hit"

export default class extends Action {
    constructor(character, speed) {
        super(character);

        this.speed = speed;
    }

    execute() {
        var character = this.character;

        character.play("beam");

        var characters = character.game.state.getCurrentState().characters;

        for (let c of characters) {
            if (c.getPosX() > character.getPosX()) {
                console.log("faster", c.key);

                let action = {
                    action: new HitAction(c),
                    duration: 2000
                };

                c.apply(action);
            }
        }
    }

    update() {
        this.character.x += this.speed;
    }
}