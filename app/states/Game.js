import Phaser from "phaser"
import CoffeeBoy from "../characters/CoffeeBoy"

export default class extends Phaser.State {
    init() {
        this.characters = [
            CoffeeBoy,
            CoffeeBoy,
            CoffeeBoy,
            CoffeeBoy
        ];

        this.numOfCharacters = 4;
        this.instances = [];

        this.isStarted = false;
    }

    preload() {
        this.game.load.image("track", require("../assets/images/track.png"));
        this.game.load.image("sky", require("../assets/images/sky.png"));

        this.game.load.image("start-button", require("../assets/images/start_button.png"));

        this.game.load.atlasJSONHash("coffee-boy", require("../assets/characters/coffee-boy.png"), require("../assets/characters/coffee-boy.json"));
    }

    create() {
        var skySprite = this.game.add.sprite(0, 0, "sky");
        var trackSprite = this.game.add.sprite(0, 150, "track");
        trackSprite.scale.setTo(0.7);

        var startButton = this.game.add.button(800, 10, "start-button", () => {
            startButton.visible = false;
            this.start();
        });

        //var coffeeBoySprite = this.game.add.sprite(100, 300, "coffee-boy");
        //coffeeBoySprite.animations.add("run", Phaser.Animation.generateFrameNames("coffeeboy_f", 1, 8, ".png", 2), 10, true);
        //coffeeBoySprite.animations.play("run");

        var x = 132;
        var y = 110;

        for (var Class of this.characters) {
            var sprite = new Class(this.game, x, y);
            this.instances.push(sprite);

            x -= 20;
            y += 38;
        }
    }

    start() {
        for (var sprite of this.instances) {
            sprite.start();
        }

        this.isStarted = true;
    }

    render() {
        //console.log("render");
    }

    update() {
        if (this.isStarted) {
            for (var sprite of this.instances) {
                sprite.x += 1;
            }
        }
    }
}