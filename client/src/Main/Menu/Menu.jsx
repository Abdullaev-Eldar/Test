/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {
  const navigate = useNavigate();

  const clickMyTasc = (e) => {
    navigate('/mytask');
  };

  const clickCandidates = (e) => {
    navigate('/candidates');
  };

  const clickVacancy = () => {
    navigate('/vacancy');
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button onClick={clickMyTasc} type="button" className="btn btn-secondary">Мои задачи по кандидатам</button>
      <button type="button" className="btn btn-secondary">Календарь</button>
      <button type="button" className="btn btn-secondary">Браузер</button>
      <button type="button" className="btn btn-secondary">Спосок резюме</button>
      <button onClick={clickCandidates} type="button" className="btn btn-secondary">Мои кандидаты</button>
      <button onClick={clickVacancy} type="button" className="btn btn-secondary">Мои вакансии</button>
    </div>
  );
}

export default Menu;
