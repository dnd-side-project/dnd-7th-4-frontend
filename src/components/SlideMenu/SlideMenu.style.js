import arrow from '@Assets/icon/arrow-gray.svg';
import styled, { css } from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 38, 41, 0.5);
  cursor: pointer;
  z-index: 20;
`;

// CHECK:: div가 최선인가?
const Content = styled.div`
  color: #000;
  width: 26rem;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in;
  ${(props) =>
    props.slide &&
    css`
      transform: translateX(0);
      transition: transform 0.5s ease-in;
    `};
`;

const UserState = styled.ul`
  display: flex;
  gap: 1.1rem;
  padding: 3.3rem 0 1.9rem 2.2rem;
  border-bottom: 1px solid #e8e8e8;
  cursor: default;

  & > li > img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
  }
`;

const UserInf = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
`;

const Name = styled.li`
  ${({ theme }) => theme.fonts.cap};
  color: ${(props) => (props.login ? '#B7B7B7' : '#5E5E5E')};
`;

const LoginBtn = styled.button`
  border: transparent;
  background: none;
  padding: 0;
  color: #68bfef;
  font-family: inherit;
  font-size: ${(props) => (props.login ? '1.8rem' : '1.2rem')};
  font-weight: bold;
  cursor: pointer;
`;

const Menu = styled.ul`
  font-size: 1.4rem;

  & > li {
    padding: 1.7rem 1.6rem 1.7rem 2rem;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
  }
`;

const Item = styled.li`
  &::after {
    content: '';
    position: absolute;
    right: 1.7rem;
    top: 2rem;
    width: 0.4rem;
    height: 0.8rem;
    background: url(${arrow}) center/cover;
  }

  li > a {
    width: 100%;
    display: block;
  }
`;

const AlarmInf = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleBtn = styled.button`
  width: 2.8rem;
  height: 1.6rem;
  background: ${(props) => (props.alarm ? '#68BFEF' : '#E0E0E0')};
  border-radius: 5rem;
  border: transparent;
  position: relative;
  cursor: pointer;
`;

const Toggle = styled.span`
  font-size: 0;
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.alarm &&
    css`
      transform: translateX(1.2rem);
      transition: all 0.2s ease-in-out;
    `}
`;

const LocationName = styled.span`
  ${({ theme }) => theme.fonts.cap};
  color: #a4a4a4;
  position: absolute;
  right: 2.6rem;
  top: 1.8rem;
`;

export {
  AlarmInf,
  Background,
  Content,
  Item,
  LocationName,
  LoginBtn,
  Menu,
  Name,
  Toggle,
  ToggleBtn,
  UserInf,
  UserState,
};
