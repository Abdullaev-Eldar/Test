import React from 'react';
import './candidates.css';

function Candidates() {
  return (
    <div className="mycandidatesBox">
      <div className="navMenu">
        <button type="button" className="bttn">Найти</button>
        <button type="button" className="bttn">Отменить поиск</button>
        <button type="button" className="bttn">Загрузить из файла...</button>
        <button type="button" className="bttn dropdown-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        <button type="button" className="bttn bttn-end dropdown-toggle">Еще</button>
      </div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="th" scope="col">ФИО</th>
            <th scope="col">Телефон</th>
            <th scope="col">Email</th>
            <th scope="col">Статус</th>
            <th scope="col">Дата статуса</th>
            <th scope="col">Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Лапин Альфред Васильевич</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Предложена работа</td>
            <td>01.01.2022</td>
            <td>Принять на работу</td>
          </tr>
          <tr>
            <td>Носков Андрей Эльдарович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Новый</td>
            <td>01.01.2022</td>
            <td>Пригласить кандидата</td>
          </tr>
          <tr>
            <td>Пестов Вадим Улебович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Прошел интервью</td>
            <td>01.01.2022</td>
            <td>Согласовать с руководителем</td>
          </tr>
          <tr>
            <td>Суворов Макар Львович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Предложена работа</td>
            <td>01.01.2022</td>
            <td>Принять на работу</td>
          </tr>
          <tr>
            <td>Наумова Эрика Митрофановна</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Согласован с руководителем</td>
            <td>01.01.2022</td>
            <td>Предложить работу</td>
          </tr>
          <tr>
            <td>Колесникова Божена Егоровна</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Зачислен в резерв</td>
            <td>01.01.2022</td>
            <td />
          </tr>
          <tr>
            <td>Гришин Лавр Константинович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Прошел интервью</td>
            <td>01.01.2022</td>
            <td>Согласовать с руководителем</td>
          </tr>
          <tr>
            <td>Баранова Агния Павловна</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Согласован с руководителем</td>
            <td>01.01.2022</td>
            <td>Предложить работу</td>
          </tr>
          <tr>
            <td>Денисова Гертруда Мэлоровна</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Предложена работа</td>
            <td>01.01.2022</td>
            <td>Принять на работу</td>
          </tr>
          <tr>
            <td>Фролова Ульяна Онисимовна</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Приглашен на интервью</td>
            <td>01.01.2022</td>
            <td>Провести интервью</td>
          </tr>
          <tr>
            <td>Воронцов Денис Алексеевич</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Предложена работа</td>
            <td>01.01.2022</td>
            <td>Принять на работу</td>
          </tr>
          <tr>
            <td>Беспалов Аверкий Кириллович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Новый</td>
            <td>01.01.2022</td>
            <td>Пригласить кандидата</td>
          </tr>
          <tr>
            <td>Савин Варлам Павлович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Приглашен на интервью</td>
            <td>01.01.2022</td>
            <td>Провести интервью</td>
          </tr>
          <tr>
            <td>Дьячков Панкрат Филиппович</td>
            <td>+7(999)999-99-99</td>
            <td>qwerty@qwery</td>
            <td>Новый</td>
            <td>01.01.2022</td>
            <td>Пригласить кандидата</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Candidates;
