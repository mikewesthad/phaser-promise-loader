module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.5%, last 2 versions, Firefox ESR, not dead",
        useBuiltIns: "entry",
        corejs: "3.6", // As per core.js docs, use the specific minor version.
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
