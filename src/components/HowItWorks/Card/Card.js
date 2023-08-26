import React from "react";
import PropTypes from 'prop-types'
import "./Card.css"

function Card({img, alt, text}){
 return (
   <div className="HowItWorks__cards_wrapper">
     <div className="HowItWorks__card">
       <img src={img} alt={alt}/>
     </div>
     <div className="HowItWorks__card__text">{text}</div>
   </div>
 )
}

Card.propTypes={
  img: PropTypes.node.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Card.defaultProps = {
  alt: 'icon',
};

export default Card;