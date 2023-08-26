import React from "react";


import Header from "./Header";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import HowItWorks from "./HowItWorks/HowItWorks";
import Reviews from "./Reviews/Reviews";

function Layout(){
  return (
    <div className="Layout_wrapper">
      <header className="Layout__header">
        <Header />
      </header>
      <main className="mainPage__wrapper>">
        <AboutUs />
        <HowItWorks />
        <Reviews/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;