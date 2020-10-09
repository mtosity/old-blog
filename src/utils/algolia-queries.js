const escapeStringRegexp = require('escape-string-regexp');

const pagePath = 'content';
const indexName = 'posts';

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
      frontmatter: { template: { eq: "post" }, draft: { ne: true } },
    },
    sort: { order: DESC, fields: [frontmatter___date] }
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
    settings: {
      minWordSizefor1Typo: 4,
      minWordSizefor2Typos: 8,
      hitsPerPage: 20,
      maxValuesPerFacet: 100,
      attributesToIndex: ['unordered(title)', 'unordered(category)'],
      numericAttributesToIndex: null,
      attributesToRetrieve: null,
      unretrievableAttributes: null,
      optionalWords: null,
      attributesForFaceting: null,
      attributesToSnippet: ['excerpt:20'],
      attributesToHighlight: null,
      paginationLimitedTo: 1000,
      attributeForDistinct: null,
      exactOnSingleWordQuery: 'attribute',
      ranking: [
        'typo',
        'geo',
        'words',
        'filters',
        'proximity',
        'attribute',
        'exact',
        'custom',
      ],
      customRanking: ['desc(date)'],
      separatorsToIndex: '',
      removeWordsIfNoResults: 'none',
      queryType: 'prefixLast',
      highlightPreTag: '<em>',
      highlightPostTag: '</em>',
      snippetEllipsisText: '',
      alternativesAsExact: ['ignorePlurals', 'singleWordSynonym'],
    },
  },
];

module.exports = queries;
