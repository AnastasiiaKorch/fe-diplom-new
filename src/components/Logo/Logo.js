import React from "react";
import {Link} from "react-router-dom";
import links from "../../data/links";
import './Logo.css'

function Logo() {
  return (
    <div className="header__logo_wrap">
      <Link to={links.main}>
        <div className="header__logo">Лого</div>
      </Link>
    </div>
  )
}

export default Logo;