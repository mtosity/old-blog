// @flow strict
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import 'gitalk/dist/gitalk.css';
import loadable from '@loadable/component';
import Author from './Author';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

const GitalkComponent = loadable(() => import('gitalk/dist/gitalk-component'));

type Props = {
  post: Node,
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    // all other code is same
  }, []);

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <GitalkComponent
          options={{
            clientID: '7753907d39cb8e4fd447',
            clientSecret: '62c36d79af779c3d5dd72b0de513d9b8b0bd17ce',
            repo: 'mtosity.github.io', // The repository of store comments,
            admin: ['mtosity'],
            owner: 'mtosity',
            id: slug, // Ensure uniqueness and length less than 50
            distractionFreeMode: false, // Facebook-like distraction free mode
          }}
        />

        <Author />
      </div>
    </div>
  );
};

export default Post;
