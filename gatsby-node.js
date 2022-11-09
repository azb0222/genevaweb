const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // fuck this man
  if (node.internal.type === "") {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "src/images",
    });

    createNodeField({
      node,
      name: "image",
      value: `/images/${relativeFilePath}`,
    });
  }
};
