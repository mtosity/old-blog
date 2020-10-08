import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from "react-instantsearch-dom";
import "./Search.scss";
import styles from "./Feed.module.scss";

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_ADMIN_KEY
);

const CustomHit = (props) => {
  const {
    hit: { slug, date, category, title, description, categorySlug },
  } = props;
  return (
    <article>
      <div className={styles["feed__item"]} key={slug}>
        <div className={styles["feed__item-meta"]}>
          <time
            className={styles["feed__item-meta-time"]}
            dateTime={moment(date).format("MMMM D, YYYY")}
          >
            {moment(date).format("MMMM YYYY")}
          </time>
          <span className={styles["feed__item-meta-divider"]} />
          <span className={styles["feed__item-meta-category"]}>
            <Link
              to={categorySlug}
              className={styles["feed__item-meta-category-link"]}
            >
              {category}
            </Link>
          </span>
        </div>
        <h2 className={styles["feed__item-title"]}>
          <Link className={styles["feed__item-title-link"]} to={slug}>
            {title}
          </Link>
        </h2>
        <p className={styles["feed__item-description"]}>{description}</p>
        <Link className={styles["feed__item-readmore"]} to={slug}>
          Read
        </Link>
      </div>
    </article>
  );
};

const Search = () => {
  return (
    <div className="search">
      <InstantSearch searchClient={algoliaClient} indexName="posts">
        <SearchBox />
        <Configure hitsPerPage={4} />
        <Hits hitComponent={CustomHit} />
        <Pagination
          translations={{
            previous: "← PREV",
            next: "→ NEXT",
            first: "«",
            last: "»",
          }}
        />
      </InstantSearch>
    </div>
  );
};

export default Search;
