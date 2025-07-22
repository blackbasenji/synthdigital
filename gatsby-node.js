// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        process: require.resolve("process/browser"),
      },
    },
    plugins: [
      require("webpack").ProvidePlugin
        ? new (require("webpack").ProvidePlugin)({
            process: "process/browser",
          })
        : null,
    ].filter(Boolean),
  });
};
