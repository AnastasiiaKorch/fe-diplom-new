import React from "react";
import { HashLink } from "react-router-hash-link";
import {useLocation} from "react-router-dom";
import "./HowItWorks.css"
import Card from "./Card/Card";

import cards from "../../data/how-it-works/how-it-works";

function HowItWorks(){
  const {pathname} = useLocation()
  return(
    <div id="how-it-works">
      <div className="HowItWorks">
        <div className='HowItWorks__wrapper'>
          <div className="HowItWorks__title">Как это работает</div>
          <HashLink smooth to={`${pathname}/#contacts`}>
            <button type="button" className="HowItWorks__button">Узнать больше</button>
          </HashLink>
        </div>
        <div className="HowItWorks__steps">
          {cards.map((card) => (
            <Card key={card.id} img={card.img} text={card.text}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;