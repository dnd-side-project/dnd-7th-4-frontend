import leftArrow from '@Assets/icon/left-arrow.svg';
import search from '@Assets/icon/search-gray.svg';
import styled from 'styled-components';

const Section = styled.section`
  width: 36rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 2.4rem 0 1.2rem 1.8rem;
  ${({ theme }) => theme.fonts.subtit1};
  border-bottom: 1px solid #e8e8e8;
`;

const BackBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: transparent;
  background: url(${leftArrow}) no-repeat center/cover;
  margin-right: 108px;
  cursor: pointer;
`;

const Form = styled.form`
  margin-top: 3.4rem;
  padding: 0 2.4rem;
`;

const Input = styled.input`
  width: 100%;
  border: transparent;
  outline: transparent;
  border-radius: 1rem;
  line-height: 3.8rem;
  padding-left: 4.2rem;
  background: url(${search}) no-repeat 2.2rem;
  background-position-x: 1.5rem;
  box-shadow: 0.1rem 0.1rem 0.7rem rgb(0 0 0 / 15%);
  font-family: inherit;
  ${({ theme }) => theme.fonts.text2};
`;

export { BackBtn, Form, Header, Input, Section };
