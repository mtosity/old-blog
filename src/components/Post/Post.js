// @flow strict
import React, { useEffect } from "react";
import { Link } from "gatsby";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import GitalkComponent from "gitalk/dist/gitalk-component";
import Author from "./Author";
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
    url: `${"https://mtosity.github.io" + slug}`,
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
        <GitalkComponent
          options={{
            clientID: "7753907d39cb8e4fd447",
            clientSecret: "97b6e03ea3c09c36d8326d38c4fcbcb74a91c3a5",
            repo: "https://github.com/mtosity/mtosity.github.io", // The repository of store comments,
            owner: "mtosity",
            id: window.location.pathname, // Ensure uniqueness and length less than 50
            distractionFreeMode: false, // Facebook-like distraction free mode
          }}
        />

        <Author />
      </div>
    </div>
  );
};

export default Post;
