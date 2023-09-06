import React from "react";
import {useSelector, useDispatch} from "react-redux";

import Button from "./Button/Button";
import SelectItem from "./SelectItem/SelectItem";

import {selectTotalCount} from "../../../store/slices/trainsSlice";
import {changeOffset, setCurrentPage} from "../../../store/slices/sortSlice";

import styles from './Filters.module.scss';

function Filters(){
  const dispatch = useDispatch();
  const totalCount = useSelector(selectTotalCount);
  const sortOptions = [
    {
      value: 'date',
      label: 'времени',
    },
    {
      value:'price__min',
      label: 'стоимости',
    },
    {
      value: 'duration',
      label: 'длительности',
    },
  ];

  const amounts = [5, 10, 20];

  const onChangeFilters = ()=> {
    dispatch(changeOffset(0));
    dispatch(setCurrentPage(1));
  };

  return (
    <section className={styles.filters}>
      <div className={styles.found}>Найдено {totalCount || 0}</div>
      <div className={styles.sort}>Сортировать по:
        <div>
          <SelectItem onChangeFilters={onChangeFilters} options={sortOptions}/>
        </div>
      </div>
      <div className={styles.show}>
        <span className={styles.show__title}>Показывать по:</span>
        {amounts.map((amount) => (
          <Button
            amount={amount}
            onChangeFilters={onChangeFilters}
          key={amount}
          className={styles.show__amount}/>
        ))}
      </div>
    </section>
  );
}

export default Filters;