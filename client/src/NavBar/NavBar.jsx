import React from 'react';
import {
  Navbar,
  NavBarContainer,
  ListTask,
  TastBlock,
} from './Style';

function NavBar() {
  return (
    <Navbar>
      <NavBarContainer />
      <ListTask>
        <TastBlock>Главная</TastBlock>
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
