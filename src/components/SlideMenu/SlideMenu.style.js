import arrowRight from '@Assets/icon/back.svg';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 38, 41, 0.5);
  cursor: pointer;
`;

// CHECK:: div가 최선인가?
const Menu = styled.div`
  color: #000;
  width: 26rem;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.5s ease-in;

  &.in {
    transform: translateX(0%);
  }
`;

const UserState = styled.ul`
  display: flex;
  gap: 1.1rem;
  padding: 3.3rem 0 1.9rem 2.2rem;
  border-bottom: 1px solid #e8e8e8;
  cursor: default;
`;

const LoginInf = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
`;

const NoLoginTxt = styled.li`
  font-size: 1.2rem;
  color: #b7b7b7;
`;

const LoginToKaKao = styled.button`
  border: transparent;
  background: none;
  padding: 0;
  color: #68bfef;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const MenuList = styled.ul`
  font-size: 1.4rem;

  & > li {
    padding: 1.7rem 1.6rem 1.7rem 2rem;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
  }
`;

const MenuItem = styled.li`
  &::after {
    content: '';
    position: absolute;
    right: 1.7rem;
    top: 2rem;
    width: 0.4rem;
    height: 0.8rem;
    background: url(${arrowRight}) center;
  }
`;

export { Background, LoginInf, LoginToKaKao, Menu, MenuItem, MenuList, NoLoginTxt, UserState };
