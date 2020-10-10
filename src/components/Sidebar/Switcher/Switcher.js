import React, { useState, useEffect } from "react";
import styles from "./Switcher.module.scss";

const Switcher = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  function turnDarkMode() {
    console.log("isDarkModeOn");
    if (window && document) {
      window.localStorage.setItem("darkMode", JSON.stringify(!isDarkModeOn));
      const bodyEl = document.getElementsByTagName("body")[0];
      !isDarkModeOn
        ? bodyEl.classList.add("dark")
        : bodyEl.classList.remove("dark");
      setIsDarkModeOn(!isDarkModeOn);
    }
  }

  useEffect(() => {
    if (window) {
      const isDark = JSON.parse(window.localStorage.getItem("darkMode"));
      console.log(isDark);
      setIsDarkModeOn(isDark || false);
    }
  }, []);

  return (
    <div className={styles["switch__container"]}>
      <span className={styles["switch__text"]}>Night mode</span>
      <label className={styles["switch"]}>
        <input id="DarkModeSwitcher" type="checkbox" value={!isDarkModeOn} />
        <span
          className={`${styles["slider"]}`}
          onClick={() => turnDarkMode()}
        />
      </label>
    </div>
  );
};

export default Switcher;
