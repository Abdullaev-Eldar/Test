import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavBarContainer,
  ListTask,
  TastBlock,
} from './Style';

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar>
      <NavBarContainer />
      <ListTask>
        <TastBlock onClick={() => navigate('/')}>Главная</TastBlock>
        <TastBlock>Компания</TastBlock>
        <TastBlock>Социальные сети</TastBlock>
        <TastBlock>Контроль рекрутеров</TastBlock>
        <TastBlock>Реферальная программа</TastBlock>
        <TastBlock>Настройки</TastBlock>
        <TastBlock>Администрировани</TastBlock>
      </ListTask>
    </Navbar>
  );
}

export default NavBar;
