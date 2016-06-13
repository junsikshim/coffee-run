import 'pixi'
import 'p2'
import Phaser from "phaser"

import BootState from "./states/Boot"
import GameState from "./states/Game"

class CoffeeRun extends Phaser.Game {
    constructor() {
        super(0, 0, Phaser.CANVAS, 'content', {
            init: () => {
                var targetWidth = 1024;
                var newRatio = window.innerWidth / targetWidth;
                var pixelRatio = window.devicePixelRatio;
                var gameWidth = window.innerWidth / newRatio * pixelRatio;
                var gameHeight = window.innerHeight / newRatio * pixelRatio;

                this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                this.scale.setUserScale(newRatio);
                this.scale.forceLandscape = true;
                this.scale.updateLayout(true);
                this.scale.setGameSize(gameWidth, gameHeight);
            },

            create: () => {
                this.state.add("Boot", BootState, false);
                this.state.add("Game", GameState, false);

                this.state.start("Boot");
            }
        });
    }
}

window.game = new CoffeeRun();

