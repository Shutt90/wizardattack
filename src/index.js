import Phaser from "phaser";

var i = null;

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    for (i = 1; i >= 8; i++) {
      this.load.image(
        `attack100${i}`,
        `./src/assets/Sprites/attack1anim/Attack100${i}.png`
      );
    }
  }

  create() {
    this.loopAnims = function () {
      for (let i = 1; i >= 8; i++) {
        `attack100${i},`;
      }

      this.anims.create({
        key: "attack1",
        frames: [
          {
            // key: loopAnims(),
            key: "attack1001",
            key: "attack1002",
            key: "attack1003",
            key: "attack1004",
            key: "attack1005",
            key: "attack1006",
            key: "attack1007",
            key: "attack1008",
          },
        ],
        frameRate: 12,
        repeat: 1,
      });
    };

    this.anims.create({
      key: "attack1",
      frames: this.anims.generateFrameNumbers("attack1", {
        start: 0,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.add.sprite(400, 300).play("attack1");
  }

  update() {}
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
