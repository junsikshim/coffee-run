import Phaser from "phaser"
import CoffeeBoy from "../characters/CoffeeBoy"
import IronBoy from "../characters/IronBoy"
import Fabio from "../characters/Fabio"
import Macaron from "../characters/Macaron"

export default class extends Phaser.State {
    init() {
        this.characterClasses = [
            CoffeeBoy,
            IronBoy,
            Fabio,
            Macaron
            //CoffeeBoy,
            //CoffeeBoy
        ];

        this.numOfCharacters = 4;
        this.characters = [];
        this.finishOrder = [];

        this.isStarted = false;
    }

    preload() {
        this.game.load.image("track", require("../assets/images/track.png"));
        this.game.load.image("sky", require("../assets/images/sky.png"));
        this.game.load.image("action-bg", require("../assets/images/action_bg.png"));

        this.game.load.image("start-button", require("../assets/images/start_button.png"));

        this.game.load.atlasJSONHash("coffee-boy", require("../assets/characters/coffee-boy.png"), require("../assets/characters/coffee-boy.json"));
        this.game.load.atlasJSONHash("iron-boy", require("../assets/characters/iron-boy.png"), require("../assets/characters/iron-boy.json"));
        this.game.load.atlasJSONHash("fabio", require("../assets/characters/fabio.png"), require("../assets/characters/fabio.json"));
        this.game.load.atlasJSONHash("macaron", require("../assets/characters/macaron.png"), require("../assets/characters/macaron.json"));

        this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }

    create() {
        var game = this.game;

        var skySprite = game.add.sprite(0, 0, "sky");
        skySprite.scale.setTo(2, 1);

        var trackSprite = game.add.sprite(0, 150, "track");
        trackSprite.scale.setTo(0.7);

        var actionBgSprite = game.add.sprite(0, 0, "action-bg");
        actionBgSprite.scale.setTo(10, 0.4);
        actionBgSprite.visible = false;
        this.actionBgSprite = actionBgSprite;

        game.world.setBounds(0, 0, 1330, 1000);
        game.camera.bounds = game.world.bounds;

        var startButton = game.add.button(800, 10, "start-button", () => {
            startButton.visible = false;
            this.start();
        });

        for (let i = 0; i < this.numOfCharacters; i++) {
            var Class = this.characterClasses[i];
            var sprite = new Class(game, i);
            this.characters.push(sprite);
        }
    }

    start() {
        for (let character of this.characters) {
            character.start();
        }

        this.isStarted = true;
    }

    render() {
        //console.log("render");
    }

    update() {
        if (this.isStarted) {
            for (let character of this.characters) {
                character.update();
            }

            this.updateCamera();
        }
    }

    updateCamera() {
        let lastX = 9999999;

        for (let character of this.characters) {
            if (character.getPosX() < lastX)
                lastX = character.getPosX();
        }

        this.game.camera.x = lastX - 400;
    }

    onCharacterAction(character, action) {
        this.game.paused = true;

        this.actionBgSprite.visible = true;
        this.actionBgSprite.y = character.y + 35;

        let name = this.game.add.text(20, 20, action.key, {
            font: "30px Arial",
            fill: "#ffffff",
            fontStyle: "italic"
        });

        name.x = character.x - name.width - 30;
        name.y = this.actionBgSprite.y + 2;

        setTimeout(() => {
            this.game.world.remove(name);
            this.actionBgSprite.visible = false;
            this.game.paused = false;
        }, 1500);
    }

    onCharacterFinish(character) {
        this.finishOrder.push(character);

        if (this.finishOrder.length === this.numOfCharacters) {
            console.log(this.finishOrder);
        }
    }
}