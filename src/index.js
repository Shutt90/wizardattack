import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.atlas("zombie", "assets/Sprites/Attack1.png");
  }

  create() {
    this.anims.create({
      key: "walk",
      frames: "zombie",
      frameRate: 12,
      repeat: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
