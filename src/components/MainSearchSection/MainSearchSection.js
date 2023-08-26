import React from "react";
import location from "../../pages/MainPages/img/location.svg";
import arrows from "../../pages/MainPages/img/arrows.svg";
import date from "../../pages/MainPages/img/date.svg";
import './MainSearchSection.css'


function MainSearchSection() {
  return (
  <section className="mainPage__section">
    <form className="mainPage__section__form">
      <div className="mainPage__form__inputGroup">
        <div className="mainPage__section__title">Направления</div>
        <div className="mainPage__section__directions">
          <div className="mainPage__section__direction">
            <div className="mainPage__direction__select">
              <div className="ant-select">
                    <span className="ant-select-selector">
                      <input className="departureCity" type="text" placeholder="Откуда" />
                    </span>
              </div>

              <div className="mainPage__section__direction_icon">
                <img src={location} alt="location" />
              </div>
            </div>
          </div>
          <div className="mainPage__section__refresh">
            <button type="button" className="mainPage__section__btnRefresh">
              <img src={arrows} className="mainPage__btnRefresh" alt="arrows" />
            </button>
          </div>

          <div className="mainPage__section__direction">
            <div className="mainPage__direction__select">
              <div className="ant-select">
                    <span className="ant-select-selector">
                      <input className="departureCity" type="text" placeholder="Откуда" />
                    </span>
              </div>
              <div className="mainPage__section__direction_icon">
                <img src={location} alt="location" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainPage__form__inputGroup">
        <div className="mainPage__section__title">Дата</div>
        <div className="mainPage__section__directions">
          <div className="mainPage__section__direction">
            <div className="mainPage__direction__select">
              <div className="ant-select">
                    <span className="ant-select-selector">
                      <input className="departureCity departureDate" type="text" placeholder="дд/мм/гг" />
                    </span>
              </div>
              <div className="mainPage__section__direction_icon">
                <img src={date} alt="date" />
              </div>
            </div>
          </div>


          <div className="mainPage__section__direction">
            <div className="mainPage__direction__select">
              <div className="ant-select">
                    <span className="ant-select-selector">
                      <input className="departureCity departureDate" type="text" placeholder="дд/мм/гг" />
                    </span>
              </div>
              <div className="mainPage__section__direction_icon">
                <img src={date} alt="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainPage__form__btn">
        <button type="submit" className="form__btn">Найти билеты</button>
      </div>
    </form>
  </section>
  )
}
export default MainSearchSection;