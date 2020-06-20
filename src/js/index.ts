import Phaser, { Game } from "phaser";
import { SceneNames, LoadingScene, MainScene } from "./scenes";

const game = new Game({
  type: Phaser.AUTO,
  parent: "phaser-container",
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 800,
    height: 600,
  },
  backgroundColor: "#ECECEC",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
    },
  },
});

game.scene.add(SceneNames.LOADING, LoadingScene);
game.scene.add(SceneNames.MAIN, MainScene);
game.scene.start(SceneNames.LOADING);
