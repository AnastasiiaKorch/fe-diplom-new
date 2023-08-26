import React from "react";



import './Footer/Footer.css'


import "../App.css"
import Navigation from "./Navigation/Navigation";
import MainSearchSection from "./MainSearchSection/MainSearchSection";








function Header() {
  return (
    <div className="Layout_wrapper">
    <header className="Layout__header">
      <Navigation />
      <div className="mainPage__wrapper">
        <p className="mainPage__title">Вся жизнь-<br/>
          <strong>путешествие!</strong>
        </p>
        <MainSearchSection/>
      </div>

    </header>









</div>
  );
};

export default Header;

