import React from "react";
import PropTypes from "prop-types";

function ContactItem({ icon, alt, children}){
  return (
    <li className="Footer__contactItem">
      <img className="contactItem__icon" src={icon} alt={alt}/>
      <div className="contactItem__text">{children}</div>
    </li>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ContactItem;