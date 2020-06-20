import { Loader, Types } from "phaser";
import LoaderPlugin = Loader.LoaderPlugin;
import FileConfig = Types.Loader.FileConfig;

export default class PromiseFile<T> extends Loader.File {
  constructor(loader: LoaderPlugin, fileConfig: FileConfig, promise: Promise<T>) {
    super(loader, fileConfig);

    promise.then((result) => {
      this.data = result;
      this.loader.nextFile(this, true);
    });

    promise.catch((err) => {
      console.error(err);
      this.loader.nextFile(this, false);
    });
  }

  load() {
    // Skip the XHR request.
    this.state = Loader.FILE_POPULATED;
  }
}
