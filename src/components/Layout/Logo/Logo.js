import React from "react";
import {Link} from "react-router-dom";
import links from "../../../data/links";
import  styles from './Logo.module.scss'

function Logo() {
  return (

      <Link to={links.main}>
        <div className={styles.logo}>Лого</div>
      </Link>

  )
}

export default Logo;