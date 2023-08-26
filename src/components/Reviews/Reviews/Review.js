import React from "react";
import PropTypes from "prop-types";
import openQuote from './img/quote-open.svg';
import closeQuote from './img/quote-close.svg';

function Review ({img, name, head, text}){
  return(
    <div className="Review__card">
      <div className="Review__card__avatar">
        <img src={img} alt="аватар" />
      </div>
      <div>
        <div className="Review__card__title">{name}</div>
        <div className="Review__card__text">
          <span className="Review__card__quote">
            <img className="Review__card__open"
              src={openQuote}
              alt="open quote"
            />
            {head} <br/>
            {text}
             <img
             className="Review__card__close"
             src={closeQuote}
              alt="closing quote"
            />
           </span>
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Review;