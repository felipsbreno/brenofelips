const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    const sliceSlug = slug.slice(12)

    createNodeField({
      node,
      name: "slug",
      value: `/${sliceSlug}`,
    })
  }
}
