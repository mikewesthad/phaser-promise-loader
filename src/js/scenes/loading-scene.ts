import { Scene, Types } from "phaser";
import { SceneNames } from ".";

export class LoadingScene extends Scene {
  public preload() {
    const { width, height } = this.scale;
    const style: Types.GameObjects.Text.TextStyle = {
      color: "#9279FF",
      fontSize: "60px",
    };
    const text = this.add.text(width / 2, height / 2, "Loading...", style);
    text.setOrigin(0, 0);

    this.load.setPath("assets/images/kenney-scribble/");
    this.load.image("character-green", "character_squareGreen.png");
    this.load.image("character-purple", "character_squarePurple.png");
    this.load.image("character-red", "character_squareRed.png");
    this.load.image("character-yellow", "character_squareYellow.png");
    this.load.image("tile-grass", "tile_grass.png");
  }

  public create() {
    this.scene.start(SceneNames.MAIN);
  }
}
