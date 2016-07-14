import Phaser from "phaser"
import CoffeeBoy from "../characters/CoffeeBoy"
import IronBoy from "../characters/IronBoy"

export default class extends Phaser.State {
    init() {
        this.characterClasses = [
            CoffeeBoy,
            IronBoy,
            //CoffeeBoy,
            //CoffeeBoy
        ];

        this.numOfCharacters = 4;
        this.characters = [];

        this.isStarted = false;
    }

    preload() {
        this.game.load.image("track", require("../assets/images/track.png"));
        this.game.load.image("sky", require("../assets/images/sky.png"));

        this.game.load.image("start-button", require("../assets/images/start_button.png"));

        this.game.load.atlasJSONHash("coffee-boy", require("../assets/characters/coffee-boy.png"), require("../assets/characters/coffee-boy.json"));
        this.game.load.atlasJSONHash("iron-boy", require("../assets/characters/iron-boy.png"), require("../assets/characters/iron-boy.json"));
    }

    create() {
        var game = this.game;
        var skySprite = game.add.sprite(0, 0, "sky");
        var trackSprite = game.add.sprite(0, 150, "track");
        trackSprite.scale.setTo(0.7);

        game.world.setBounds(0, 0, 1340, 1000);
        game.camera.bounds = game.world.bounds;

        var startButton = game.add.button(800, 10, "start-button", () => {
            startButton.visible = false;
            this.start();
        });

        for (let i = 0; i < this.characterClasses.length; i++) {
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
}