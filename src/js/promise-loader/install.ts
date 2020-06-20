import { Loader } from "phaser";
import FileTypesManager = Loader.FileTypesManager;
import LoaderPlugin = Loader.LoaderPlugin;
import PromiseFile from "./promise-file";

declare module "phaser" {
  namespace Loader {
    interface LoaderPlugin {
      promise: (key: string, promise: Promise<any>) => LoaderPlugin;
    }
  }
}

export default function InstallPromiseLoader() {
  FileTypesManager.register("promise", function <T>(
    this: LoaderPlugin,
    key: string,
    promise: Promise<T>
  ) {
    this.addFile(new PromiseFile(this, { key, type: "promise" }, promise));
    return this;
  });
}
