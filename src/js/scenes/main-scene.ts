import { Scene, Input, Math as PMath } from "phaser";

import Pointer = Input.Pointer;
const { POINTER_DOWN } = Input.Events;

export class MainScene extends Scene {
  create() {
    const { width, height } = this.scale;

    const tileGroup = this.physics.add.staticGroup();
    const spriteGroup = this.physics.add.group();

    for (let x = -60; x < width + 60; x += 60) {
      const image = this.physics.add.staticImage(x, height - 30, "tile-grass");
      tileGroup.add(image);
    }

    this.input.on(POINTER_DOWN, (pointer: Pointer) => {
      const color = PMath.RND.pick(["green", "purple", "yellow", "red"]);
      const sprite = this.physics.add.sprite(pointer.worldX, pointer.worldY, `character-${color}`);
      spriteGroup.add(sprite);
      this.physics.add.collider(sprite, tileGroup);
    });
  }
}
