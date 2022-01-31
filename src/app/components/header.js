import React from "react";
import LogoIcon from "../icons/logo";
import styles from "../../../styles/modules/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <LogoIcon />
      </div>
    </div>
  );
};

export default Header;
