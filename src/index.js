import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {

    for(i=1; i>=8; i++) {
      this.load.image(this.load.image(
        `attack100${i}`,
        `./src/assets/Sprites/attack1anim/Attack100${i}.png`
      )
    )};
  };

  create() {

    const loopAnims = fuction(anim) {
      for (i=1; i>=8; i++) {
        return this.attack`${Anim}` = `key: attack100${i}`
      },
    ],
    frameRate: 12,
    repeat: 1,
  
      this.anims.create({
      key: attack1,
      frames: [
        {
          loopAnims()
        }
      ]  
      )
    )};
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
  };



  update() {
    this.animatedSpace = this.add
    .sprite(400, 300, "attack1001")
    .play("attack1");
  };
};

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
