import React from "react";
import {HashLink} from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import links from "../../data/links";
import Logo from "../Logo/Logo";
import './Navigation.css'


function Navigation() {
  const {pathname} = useLocation();
  return(
  <nav id="Layout_navigation">
    <Logo/>

    <ul className="header__navigation">
      <li className="header__navigation__link">
        <HashLink smooth to={`${links.main}/#about`}>
          <div>О нас</div>
      </HashLink>
      </li>
      <li className="header__navigation__link">
        <HashLink smooth to={`${links.main}/#how-it-works`}>
          <div>Как это работает</div>
        </HashLink>
      </li>
      <li className="header__navigation__link">
        <HashLink smooth to={`${links.main}/#reviews`}>
          <div>Отзывы</div>
        </HashLink>
      </li>
      <li className="header__navigation__link">
        <HashLink smooth to={`${pathname}/#contacts`}>
          <div>Контакты</div>
        </HashLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation;