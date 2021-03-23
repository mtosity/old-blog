// @flow strict
import React, { useEffect } from "react";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";
import { Link } from "gatsby";
import Author from "./Author";
import Comments from "./Comments";
import Content from "./Content";
import Meta from "./Meta";
import Tags from "./Tags";
import styles from "./Post.module.scss";
import type { Node } from "../../types";

type Props = {
  post: Node,
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  let disqusConfig = {
    url: `${"https://mtosity.github.io/" + location.pathname}`,
    identifier: post.id,
    title: post.title,
  };

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    // all other code is same
  }, []);

  return (
    <div className={styles["post"]}>
      <Link className={styles["post__home-button"]} to="/">
        All Articles
      </Link>

      <div className={styles["post__content"]}>
        <Content body={html} title={title} />
      </div>

      <div className={styles["post__footer"]}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Disqus config={disqusConfig} />
        <Author />
      </div>
    </div>
  );
};

export default Post;
