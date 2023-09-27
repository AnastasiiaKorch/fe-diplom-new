import React,{useEffect,useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Rate} from "antd";
import {StarOutlined} from "@ant-design/icons";

import {removeLastTicketsData} from "../../store/slices/lastTicketsSlice";
import {removeNumOfAllPassengers} from "../../store/slices/numOfpassengersSlice";
import {removeOrderConfirmationData} from "../../store/slices/orderConfirmationSlice";
import {removeAllPassengers} from "../../store/slices/passengersSlice";
import {removePersonalData} from "../../store/slices/personalDataSlice";
import {removeSearchData} from "../../store/slices/searchSlice";
import {removeSeatsData} from "../../store/slices/seatsSlice";
import {removeSidebarSelectionData} from "../../store/slices/sidebarSelectSlice";
import {removeSortData} from "../../store/slices/sortSlice";
import {removeTrainData} from "../../store/slices/trainSlice";
import {removeTrainsData} from "../../store/slices/trainsSlice";
import {selectName, selectSum, selectOrderNumber} from "../../store/slices/orderSlice";
import email from './img/email.svg';
import rub from './img/rub.svg';
import print from './img/print.svg';
import show from './img/show.svg';

import links from "../../data/links";
import styles from './OrderSuccess.module.scss';

function OrderSuccess(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    dispatch(removeLastTicketsData());
    dispatch(removeNumOfAllPassengers());
    dispatch(removeOrderConfirmationData());
    dispatch(removeAllPassengers());
    dispatch(removePersonalData());
    dispatch(removeSearchData());
    dispatch(removeSeatsData());
    dispatch(removeSidebarSelectionData());
    dispatch(removeSortData());
    dispatch(removeTrainData());
    dispatch(removeTrainsData());
  },[dispatch]);

  const title = useRef(document.createElement('section'));
  useEffect(()=> {
    title.current.scrollIntoView({behavior:'smooth', block:'center'})
  },[]);

  const orderNumber = useSelector(selectOrderNumber);
  const sum=useSelector(selectSum);
  const name = useSelector(selectName);

  const clickHandler=()=>{
    navigate(links.main);
  };

  return(
    <section className={styles.orderSuccess} ref={title}>
      <div className={styles.thankYouText}>Благодарим Вас за заказ!</div>
      <article className={styles.afterOrder}>
        <div className={styles.orderData}>
          <div>Заказ № {orderNumber}</div>
          <div>
            <span className={styles.priceWord}>Сумма:</span>
            <span>{sum}</span>
            <img className={styles.currency} src={rub} alt="Иконка-рубль"/>
         </div>
        </div>
        <div className={styles.nextSteps}>
          <div className={styles.stepItem}>
            <img className={styles.stepIcon} src={email} alt="Иконка-e-mail"/>
            <div className={styles.stepText}>Билеты будут <br/>отправлены <br/> на ваш
              <span className={styles['stepText-bold']}> e-mail</span>
            </div>
          </div>
          <div className={styles.stepItem}>
            <img className={styles.stepIcon} src={print} alt="иконка-билет"/>
            <div className={styles.stepText}>
              <span className={styles['stepText-bold']}>Распечатайте <br/></span>
              <span>И сохраняйте билеты <br/> до посадки</span>
            </div>
          </div>
          <div className={styles.stepItem}>
            <img className={styles.stepIcon} src={show} alt="иконка-проводник"/>
            <div className={styles.stepText}>
              <span className={styles['stepText-bold']}>Предъявите <br/></span>
              <span>распечатанные билеты при посадке</span>
            </div>
          </div>
        </div>
        <div className={styles.thankYouLetter}>
          <div className={styles.top}>{`${name}!`}</div>
          <div className={styles.middle}>
            Ваш заказ успешно оформлен.<br/>В ближайшее врями с Вами свяжется оператор для потдверждения.
          </div>
          <div className={styles.bottom}>
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.left}>
            <div className={styles.reviewText}>Оценить сервис</div>
            <Rate character={<StarOutlined style={{fontSize:'48px'}}/>}/>
          </div>
          <button type="button" className={styles.changeButton} onClick={clickHandler}>Вернуться на главную</button>
        </div>
      </article>
    </section>
  );
}

export default OrderSuccess;