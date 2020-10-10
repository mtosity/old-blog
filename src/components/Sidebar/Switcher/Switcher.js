import React, { useState, useEffect } from "react";
import styles from "./Switcher.module.scss";

const Switcher = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  function turnDarkMode() {
    if (window && document) {
      setIsDarkModeOn(!isDarkModeOn);
      window.localStorage.setItem("darkMode", isDarkModeOn);
      const bodyEl = document.getElementsByTagName("body")[0];
      isDarkModeOn
        ? bodyEl.classList.add("dark")
        : bodyEl.classList.remove("dark");
    }
  }

  useEffect(() => {
    if (window) {
      const isDark = window.localStorage.getItem("darkMode");
      setIsDarkModeOn(isDark);
    }
  }, []);

  return (
    <div className={styles["switch__container"]}>
      <span className={styles["switch__text"]}>Night mode</span>
      <label className={styles["switch"]}>
        <input
          id="DarkModeSwitcher"
          type="checkbox"
          defaultChecked={!isDarkModeOn}
        />
        <span
          className={`${styles["slider"]}`}
          onClick={() => turnDarkMode()}
        />
      </label>
    </div>
  );
};

export default Switcher;
