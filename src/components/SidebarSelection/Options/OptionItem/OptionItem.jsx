import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

import {selectOptions, changeOptionsFields} from "../../../../store/slices/sidebarSelectSlice";

import on from './img/on.svg';
import off from './img/off.svg';
import styles from './OptionItem.module.scss';

export default function OptionItem({img, title, name, onChangeOption}){
  const dispatch= useDispatch();
  const options = useSelector(selectOptions);

  const status = options[name];

  const clickHandler = ()=> {
    dispatch(changeOptionsFields({name, value: !status}));
    onChangeOption();
  };

  const imgIcon = status ? on : off;
  return(
    <div className={styles.item}>
      <div className={styles.item__left}>
        <img
          className={styles.item__icon}
          src={img}
          alt={`Иконка - ${title}`}
        />
        <div className={styles.item__title}>{title}</div>
      </div>
      <button type='button' className={styles.item__status} onClick={clickHandler}>
        <img src={imgIcon} alt="Иконка-тумблер"/>
      </button>
    </div>
  );
}

OptionItem.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func.isRequired,
}