const escapeStringRegexp = require("escape-string-regexp");

const pagePath = `content`;
const indexName = `posts`;

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
      frontmatter: { template: { eq: "post" }, draft: { ne: true } }
    },
  ) {
    edges {
      node {
        id
        fields {
          slug
          categorySlug
        }
        frontmatter {
          title
          date
          category
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
