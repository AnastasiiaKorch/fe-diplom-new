import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AutoComplete} from "antd";

import PropTypes from "prop-types";

import PopUp from "../../PopUp/PopUp";
import useDebounce from "../../../hooks/useDebounce";
import consts from "../consts";


import { changeSearchFields, selectDepartureCity, selectArrivalCity} from "../../../store/slices/searchSlice";
import {changeOffset, setCurrentPage} from "../../../store/slices/sortSlice";
import {removeTrainData} from "../../../store/slices/trainSlice";


import 'antd/dist/antd.css';
import './Direction.module.scss'

function Direction({name, placeholder, className}){
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const departureCity = useSelector(selectDepartureCity);
  const arrivalCity = useSelector(selectArrivalCity);
  const [inputValue, setInputValue] = useState('');
  const [citiesList, setCitiesList] = useState([]);

  const debouncedSearch = useDebounce(inputValue, 500);

  useEffect(()=> {
    if(name === consts.depCity && departureCity){
      setInputValue(departureCity.name);
    }
    if(name === consts.arrCity && arrivalCity){
      setInputValue(arrivalCity.name);
    }
  }, [arrivalCity, departureCity, name]);

  const fetchCities = async (value) =>{
    setError(null);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SEARCH_CITY}=${value}`
      );
      if(!response.ok){
        throw new Error("Что-то пошло не так");
      }
      const data = await  response.json();
      // eslint-disable-next-line dot-notation
      setCitiesList(data.map((city) => ({label: city.name, value: city['_id']}))
      );
    } catch (err){
      setError("Что-то пошло не так. Перезагрузите страницу");
    }
  };

  useEffect(()=>{
   if(inputValue?.trim() === ''){
     return;
   }
   if(debouncedSearch){
     fetchCities(inputValue);
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[debouncedSearch]);

  const searchHandler = (value) => {
    setInputValue(value);
    if( value === ''){
      dispatch(changeSearchFields({name, value: {id: null, name: null}}));
    }
  };

  const selectHandler =(data) => {
    const cityName = citiesList?.find((item) => item.value === data)?.label;
    setInputValue(cityName);
    dispatch(changeSearchFields({name, value:{id:data, name: cityName}}));
    dispatch(changeOffset(0));
    dispatch(setCurrentPage(1));
    dispatch(removeTrainData())
  };

  return (
    <>
      {!error && (
        <AutoComplete
          options={citiesList}
          onSelect={selectHandler}
          onSearch={searchHandler}
          value={inputValue}
          allowClear
          >
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            className={className}
          />
        </AutoComplete>
      )}
      {

        error && <PopUp reason="error" message={error} />
      }
    </>
  );
}

Direction.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.node.isRequired
};

export default Direction;