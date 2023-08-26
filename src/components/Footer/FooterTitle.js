import React from "react";
import PropTypes from "prop-types";

function FooterTitle({text}){
  return(
    <h3 className="Footer__contacts__title">{text}</h3>

  )
}
FooterTitle.propTypes={ text: PropTypes.string.isRequired}

export default FooterTitle;