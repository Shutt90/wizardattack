import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image(
      "attack1001",
      "./src/assets/Sprites/attack1anim/Attack1001.png"
    );
    this.load.image(
      "attack1002",
      "./src/assets/Sprites/attack1anim/Attack1002.png"
    );
    this.load.image(
      "attack1003",
      "./src/assets/Sprites/attack1anim/Attack1003.png"
    );
    this.load.image(
      "attack1004",
      "./src/assets/Sprites/attack1anim/Attack1004.png"
    );
    this.load.image(
      "attack1005",
      "./src/assets/Sprites/attack1anim/Attack1005.png"
    );
    this.load.image(
      "attack1006",
      "./src/assets/Sprites/attack1anim/Attack1006.png"
    );
    this.load.image(
      "attack1007",
      "./src/assets/Sprites/attack1anim/Attack1007.png"
    );
    this.load.image(
      "attack1008",
      "./src/assets/Sprites/attack1anim/Attack1008.png"
    );
  }

  create() {
    this.anims.create({
      key: "attack1",
      frames: [
        {
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

    this.animatedSpace = this.add
      .sprite(400, 300, "attack1001")
      .play("attack1");
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
