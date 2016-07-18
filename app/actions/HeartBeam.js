import Action from "./Action"
import HitAction from "./Hit"

export default class extends Action {
    constructor(character, speed) {
        super("heartbeam", character);

        this.message = "미카쨔응~ 최고다!♥";
    }

    execute() {
        var character = this.character;
        var characters = character.game.state.getCurrentState().characters;
        var fastestCharacter = null;
        var fastestPos = -1;

        for (let c of characters) {
            if (c.getPosX() > fastestPos) {
                fastestPos = c.getPosX();
                fastestCharacter = c;
            }
        }

        if (this.character !== fastestCharacter) {
            let action = {
                actionObject: new HitAction(fastestCharacter),
                duration: 2000
            };

            fastestCharacter.applyAction(action);
        }
    }
}