# Phaser + TypeScript

This is a minimal Phaser & TypeScript template. It is configured with:

- Webpack, configured in `./config`.
- Phaser 3.
- TypeScript.
- Babel, for transpiling latest JS features to compatible code for recent browsers (see `./config`).

## Installation

Make sure you have a recent version of [node](https://nodejs.org/en/download/) (and npm), open up the project and run:

```
npm install
```

## Usage

See the scripts in package.json, but the following scripts are provided:

- `npm run dev`, run webpack in development mode and open up a browser with the app running.
- `npm run build`, run webpack in production mode and build the app to `./dist`.
- `npm run deploy`, build the app and push it to a GitHub pages branch within the repository.

## Notes

- The game is configured to be full screen.
- The project is configured to allow JS in addition to TS.
- The `src/assets/` folder is copied over in the build process, so anything placed in there is available for loading within Phaser, see `LoadingScene`.