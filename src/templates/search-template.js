// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Page from "../components/Page";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { useSiteMetadata } from "../hooks";
import type { PageContext, AllMarkdownRemark } from "../types";

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext,
};

const SearchTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath,
  } = pageContext;

  const pageTitle =
    currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Search />
      </Page>
    </Layout>
  );
};

export default SearchTemplate;
