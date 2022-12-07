/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Navbar = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 220px;
    background: #212936;
    z-index: 2;
`;

export const NavBarContainer = styled.div`
    padding: 10px 16px;
`;

export const ListTask = styled.div`
    /* padding: 20px 16px; */
`;

export const TastBlock = styled.div`
    & {
    padding: 10px 16px;    
    font-size: 18px;
    color: #8C939F;
    cursor: pointer;

    }
    &:hover {
    background-color: #1d2b4d;
    color: white;
  } 
`;
