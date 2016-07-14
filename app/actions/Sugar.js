import Action from "./Action"
import SlowAction from "./Slow"
import RunAction from "./Run"

export default class extends Action {
    constructor(character, speed) {
        super("sugar", character);

        this.speed = speed;
    }

    execute() {
        var character = this.character;

        var characters = character.game.state.getCurrentState().characters;

        for (let c of characters) {
            if (c !== character) {
                let action = {
                    action: new SlowAction(c),
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