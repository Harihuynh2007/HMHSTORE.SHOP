import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContent}>
      <div className="container">
        <div className={styles.siteTitle}>
          <h1 className={styles.siteName}>I'M HUYNH MINH HAI</h1>
        </div>
        <h3 className={styles.siteSlogan}>Technical Support Engineer</h3>
      </div>
    </header>
  );
};

export default Header;
