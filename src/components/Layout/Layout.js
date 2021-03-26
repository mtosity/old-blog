// @flow strict
import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import type { Node as ReactNode } from "react";
import { useSiteMetadata } from "../../hooks";
import styles from "./Layout.module.scss";
//addition css
import "../../assets/onedark.css";
import "../../assets/table.css";

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string,
};

const Layout = ({ children, title, description, socialImage }: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);

  useEffect(() => {
    if (window && document) {
      let isDark = JSON.parse(window.localStorage.getItem("darkMode"));
      isDark = isDark === null ? true : isDark;
      const bodyEl = document.getElementsByTagName("body")[0];
      if (isDark) {
        bodyEl.classList.add("dark");
      }
    }
  }, []);

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <script
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=2240398129600421&autoLogAppEvents=1"
          nonce="2YAS0o38"
        ></script>
      </Helmet>
      <div id="fb-root"></div>
      {children}
    </div>
  );
};

export default Layout;
