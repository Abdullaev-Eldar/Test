import React, { useState } from 'react';
import './candidateCard.css';

function CandidatCard() {
  const [clickButton1, setClickButton1] = useState(false);
  const [clickButton2, setClickButton2] = useState(false);

  const clickHandler1 = () => {
    setClickButton1(true);
    setClickButton2(false);
  };
  const clickHandler2 = () => {
    setClickButton2(true);
    setClickButton1(false);
  };

  return (
    <>
      <div className="header">
        <button className="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </button>
        <button className="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </button>
        <div className="star">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        </div>
        <div>
          <h3>
            Абрикосов Игорь Анатольевич
            (Предложена работа с 04.06.2021 19:44:35, отв. Береломова Анна)
          </h3>
        </div>
      </div>
      <div className="navMenu2">
        <button type="button" className="bttn2">Записать и закрыть</button>
        <button type="button" className="bttn2">Записать</button>
        <button type="button" className="bttn2 dropdown-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
          </svg>
          Печать
        </button>
        <button type="button" className="bttn2">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
        </button>
        <div className="href">
          <a href="/">Файлы (2)</a>
        </div>
      </div>
      <div className="container">
        <div className="about-candidate">
          <div className="list">
            <div className="title">ФИО:</div>
            <div className="info">Абрикосов Игорь Анатольевич</div>
          </div>
        </div>
        <div className="about-candidate">
          <div className="list">
            <div className="title">Должность:</div>
            <div className="info">Программист Python</div>
          </div>
        </div>
        <div className="about-candidate">
          <div className="list">
            <div className="title">Стаж:</div>
            <div className="info-experience">4,5</div>
          </div>
        </div>
        <div className="about-candidate">
          <div className="list">
            <div className="title">Зарплата:</div>
            <div className="info-experience">61 224,21</div>
          </div>
        </div>
        <div className="img">
          <img src="https://assets.gq.ru/photos/5e1c47b97df1dc0008dbb0be/1:1/w_2651,h_2651,c_limit/0.jpg" style={{ width: 250, height: 250 }} alt="..." />
        </div>
        <div className="button-more">
          <button onClick={clickHandler1} type="button" className="bttn2">Общая информация</button>
          <button onClick={clickHandler2} type="button" className="bttn2">Контактная информация</button>
        </div>
        <div className="general-information">
          {clickButton1 ? (
            <>
              <div className="about-candidate more">
                <div className="list">
                  <div className="title">Возраст:</div>
                  <div className="info-experience">17.08.1995  27лет</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Пол:</div>
                  <div className="info-experience">Мужской</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Аффилиант:</div>
                  <div className="info-experience">Кадровое агенство Астрал</div>
                </div>
              </div>
            </>
          ) : (
            <div />
          )}
        </div>
        <div className="contact-information">
          {clickButton2 ? (
            <>
              <div className="about-candidate more">
                <div className="list">
                  <div className="title">Адресс:</div>
                  <div className="info-experience">Москва</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Email:</div>
                  <div className="info-experience">qwerty@qwery</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Мобильный:</div>
                  <div className="info-experience">+7(999)9999999</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Вконтакте:</div>
                  <div className="info-experience">https://vk.com/id615398855</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Скайп:</div>
                  <div className="info-experience">https://www.skype.com/ru/</div>
                </div>
              </div>
              <div className="about-candidate">
                <div className="list">
                  <div className="title">Резюме:</div>
                  <div className="info-experience">https://hh.ru/resume/495298509240922</div>
                </div>
              </div>
            </>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}

export default CandidatCard;
