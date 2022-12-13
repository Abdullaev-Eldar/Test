import React, { useState } from 'react';
import './vacancy.css';

function Vacancy() {
  const [clickButton1, setClickButton1] = useState(false);
  const [clickButton2, setClickButton2] = useState(false);

  const clickHandler1 = () => {
    if (clickButton1 === false) {
      setClickButton1(true);
    } else {
      setClickButton1(false);
    }
  };
  const clickHandler2 = () => {
    if (clickButton2 === false) {
      setClickButton2(true);
    } else {
      setClickButton2(false);
    }
  };
  return (
    <>
      <div className="header">
        <div className="star">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        </div>
        <div>
          <h3>
            Программист Python
            (В работе с 04.06.2021 19:44:35)
          </h3>
        </div>
      </div>
      <div className="navMenu2">
        <button type="button" className="bttn2">Записать и закрыть</button>
        <button type="button" className="bttn2">Записать</button>
        <button type="button" className="bttn2 dropdown-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor" className="bi bi-file-earmark-word" viewBox="0 0 16 16">
            <path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          Вакансия
        </button>
        <button type="button" className="bttn2">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
        </button>
        <div className="href">
          <a href="/">Файлы</a>
        </div>
      </div>
      <div className="container">
        <div className="about-vacancy">
          <div className="list">
            <div className="title">Наименование:</div>
            <div className="info">Программист Python</div>
          </div>
        </div>
        <div className="about-vacancy">
          <div className="list">
            <div className="title">Зарплата от:</div>
            <div className="info-experience-vacancy">0,00</div>
            <div className="info-experience-vacancy">160 000,00</div>
          </div>
        </div>
        <div className="about-vacancy">
          <div className="list">
            <div className="title">Массовый подбор:</div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </div>
        </div>
        <div className="about-vacancy">
          <div className="list">
            <div className="title">Уровень сложности:</div>
            <select className="info">
              <option selected>Выбрать</option>
              <option value="1">А</option>
              <option value="2">...</option>
              <option value="3">...</option>
            </select>
          </div>
        </div>
        <button onClick={clickHandler1} type="button" className="information">Общая информация</button>
        {clickButton1 ? (
          <>
            <div className="about-vacancy">
              <div className="list">
                <div className="title">Организация:</div>
                <select className="info">
                  <option selected>Выбрать</option>
                  <option value="1">Волгософт проект</option>
                  <option value="2">...</option>
                  <option value="3">...</option>
                </select>
              </div>
            </div>
            <div className="about-vacancy">
              <div className="list">
                <div className="title">Направление:</div>
                <select className="info">
                  <option selected>Выбрать</option>
                  <option value="1">Програмисты</option>
                  <option value="2">...</option>
                  <option value="3">...</option>
                </select>
              </div>
            </div>
            <div className="about-vacancy">
              <div className="list">
                <div className="title">Внутренний клиент:</div>
                <select className="info">
                  <option selected>Выбрать</option>
                  <option value="1">Редькин Александр</option>
                  <option value="2">...</option>
                  <option value="3">...</option>
                </select>
              </div>
            </div>
            <div className="about-vacancy">
              <div className="list">
                <div className="title">Кадровое агенство:</div>
                <div className="info">Кадровое агенство Астрал</div>
              </div>
            </div>
            <div className="about-vacancy">
              <div className="list">
                <div className="title">Конфиденциальная:</div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div />
        )}
        <div className="button-more">
          <button onClick={clickHandler2} type="button" className="bttn2">Дополнительные характеристики</button>
          <button type="button" className="bttn2">Компенсации и льготы</button>
        </div>
        {clickButton2 ? (
          <div className="container-characteristics">
            <div className="button-groupe">
              <button type="button" className="bttn">Добавить</button>
              <button type="button" className="bttn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
              </button>
              <button type="button" className="bttn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
              </button>
              <button type="button" className="bttn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
              </button>
              <button type="button" className="bttn dropdown-toggle">
                Заполнить по
              </button>
            </div>
            <table className="table table-hover table-bordered table-characteristics">
              <thead>
                <tr>
                  <th scope="col">Характеристика вакансии</th>
                  <th scope="col">Значение</th>
                  <th scope="col">Раздел оффера</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Стаж</td>
                  <td className="td">60</td>
                  <td />
                </tr>
                <tr>
                  <td>Зарплата</td>
                  <td className="td">160</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}

export default Vacancy;
