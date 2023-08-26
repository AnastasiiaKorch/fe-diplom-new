import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


import  './PopUp.css';
import info from './img/info.svg';
import error from './img/error.svg';

function PopUp({reason, message}){
  const img = reason === 'info' ? info : error;

  const portalElement = document.getElementById('popups');

  const closeHandler = () => {
    const modal = document.getElementById('popup')
    portalElement.removeChild(modal);
  };

  const popup = (
    <div id="popup" className="popup__wrapper">
      <div className="popUp">
        <div className="popUp__reason">
          <img
            className="popUp_img"
            src={img}
            alt={`${reason}icon`}
          />
        </div>
        <div className="popUp__container">
          <div className="popUp__message">{message}</div>
          </div>
          <button
            className="popUp__button"
            onClick={closeHandler}
            type='button'>Понятно</button>
        </div>
      </div>

  );
  return ReactDOM.createPortal(popup, portalElement)
}

PopUp.propTypes ={
  reason: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default PopUp;