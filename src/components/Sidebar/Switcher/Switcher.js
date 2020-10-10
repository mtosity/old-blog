import React, { useState, useEffect } from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  function turnDarkMode() {
    setIsDarkModeOn(!isDarkModeOn);
    if (window) {
      window.localStorage.setItem('darkMode', isDarkModeOn);
    }
  }

  useEffect(() => {
    if (document) {
      const bodyEl = document.getElementsByTagName('body')[0];
      isDarkModeOn
        ? bodyEl.classList.add('dark')
        : bodyEl.classList.remove('dark');
    }
  }, [isDarkModeOn]);

  return (
    <div className={styles['switch__container']}>
      <span className={styles['switch__text']}>Night mode</span>
      <label className={styles['switch']}>
        <input
          id="DarkModeSwitcher"
          type="checkbox"
          defaultChecked={!isDarkModeOn}
        />
        <span
          className={`${styles['slider']}`}
          onClick={() => turnDarkMode()}
        />
      </label>
    </div>
  );
};

export default Switcher;
