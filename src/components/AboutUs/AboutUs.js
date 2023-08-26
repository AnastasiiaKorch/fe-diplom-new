
import React from "react";
import about from "../../data/about/about";
import "./AboutUs.css"

function AboutUs(){
  return(
    <div id="about">
      <div className="AboutUs">
        <h3 className="AboutUs__title">О нас</h3>
        <div className="AboutUs__text">{about}
        </div>
      </div>
    </div>
  )
}
export default AboutUs;