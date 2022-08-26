import SearchIcon from '@Assets/icon/location-search.svg';
import styled from 'styled-components';

const LocationHeader = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 36rem;
  height: 8.5rem;
  border-bottom: 0.01rem solid #e8e8e8;
  box-sizing: border-box;
`;
const LocationTitle = styled.header`
  position: absolute;
  top: 4.9rem;
  width: 12rem;
  height: 2.2rem;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-align: center;
  letter-spacing: 0.015rem;
`;
const LocationEditBtn = styled.button`
  position: absolute;
  top: 4.9rem;
  left: 30rem;
  width: 5rem;
  height: 1.7rem;
  border: 0;
  background: inherit;
  color: #8d8d8d;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align: center;
  letter-spacing: 0.01rem;
  cursor: pointer;
`;
const LocationSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 11.9rem;
  left: 2.4rem;
  width: 31.2rem;
  height: 4rem;
`;
const LocationSearchWrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 31.2rem;
  height: 4rem;
  border-radius: 1rem;
  background: #ffffff;
  gap: 1rem;
  filter: drop-shadow(0.1rem 0.1rem 0.7rem rgba(0, 0, 0, 0.15));
`;
const LocationForm = styled.form``;
const LocationSearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 2.223rem;
  left: 1.5rem;
  top: 0.888rem;
  height: 2.223rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: url(${SearchIcon}) no-repeat;
`;
const LocationInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: '어떤 지역의 날씨가 궁금하세요?',
}))`
  top: 1rem;
  position: absolute;
  width: 20rem;
  height: 1.7rem;
  margin-left: 4.223rem;
  border: inherit;
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
  outline: none;
`;

export {
  LocationEditBtn,
  LocationForm,
  LocationHeader,
  LocationInput,
  LocationSearchDiv,
  LocationSearchIcon,
  LocationSearchWrapper,
  LocationTitle,
};
