import Phaser from "phaser"

export default class extends Phaser.State {
    init() {

    }
    preload() {}
    update() {
        this.game.state.start("Game");
    }
}