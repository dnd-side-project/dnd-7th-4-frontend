import styled from 'styled-components';

const LocationWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 36rem;
  height: 78rem;
  background: #ffffff;
`;
const LocationHeader = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 36rem;
  height: 8.5rem;
  border-bottom: 0.01rem solid #e8e8e8;
  box-sizing: border-box;
`;
const LocationTitle = styled.h1`
  position: absolute;
  top: 4.9rem;
  width: 12rem;
  height: 2.2rem;
  color: #000000;
  font-family: 'Pretendard';
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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align: center;
  letter-spacing: 0.01rem;
  ${({ edit }) => {
    return edit ? `background: red` : null;
  }};
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
  width: 26.7rem;
  height: 4rem;
  border-radius: 1rem;
  background: #ffffff;
  gap: 1rem;
  filter: drop-shadow(0.1rem 0.1rem 0.7rem rgba(0, 0, 0, 0.15));
`;
const LocationForm = styled.form``;
const LocationSearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.4rem;
  left: 28rem;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 100%;
  background: #5d9eff;
  color: #fefdfe;
  &:hover {
    color: green;
  }
`;
const LocationInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: '어떤 지역의 날씨가 궁금하세요?',
}))`
  top: 1rem;
  position: absolute;
  width: 23rem;
  height: 1.7rem;
  margin-left: 1.5rem;
  border: inherit;
  color: black;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
  outline: none;
`;
const LocationResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 18.9rem;
  width: 36rem;
`;
const LocationPinnedPlace = styled.div`
  position: relative;
  width: 31.2rem;
  height: 9rem;
  margin: 0 auto;
  margin-bottom: 1.8rem;
  border-radius: 2rem;
  background: #ffffff;
  box-shadow: 0rem 0rem 0.7rem rgba(0, 0, 0, 0.2);
  ${({ value }) => {
    return value ? `display: hidden` : null;
  }};
`;
const LocationPinnedName = styled.h1`
  display: flex;
  position: relative;
  top: 1.5rem;
  left: 1.2rem;
  width: 14rem;
  height: 1.7rem;
  color: #000000;
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.7rem;
  letter-spacing: 0.015rem;
`;
const LocationPinnedTemp = styled.h1`
  display: flex;
  position: relative;
  top: 2rem;
  left: 1.2rem;
  width: 4.8rem;
  height: 4rem;
  color: #000000;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 4rem;
  letter-spacing: 0.015rem;
  ::after {
    content: '°';
  }
`;
const LocationPinnedWord = styled.h1`
  position: relative;
  top: 0.5rem;
  width: 5rem;
  height: 1.2rem;
  left: 7.5rem;
  color: #000000;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.015rem;
`;
const LocationSearchPlace = styled.div`
  top: 1.4rem;
  left: 2.4rem;
  position: relative;
  width: 30.9rem;
  height: 2.4rem;
  margin-bottom: 1.7rem;
  /* ${({ value }) => {
    return !value ? `display: show` : null;
  }} */
`;
const LocationSearchPlaceName = styled.h1`
  display: flex;
  align-items: center;
  position: absolute;
  width: 20rem;
  height: 1.6rem;
  color: #000000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
  letter-spacing: 0.015rem;
`;
const LocationSearchPlaceIcon = styled.h1`
  display: flex;
  align-items: center;
  position: absolute;
  left: 24rem;
  width: 2.4rem;
  height: 1.6rem;
`;
const LocationSearchPlaceTemp = styled.h1`
  display: flex;
  align-items: center;
  position: absolute;
  left: 28.3rem;
  width: 2.7rem;
  height: 1.6rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 140%;
  line-height: 1.6rem;
  ::after {
    content: '°';
  }
`;

export {
  LocationWrapper,
  LocationHeader,
  LocationTitle,
  LocationEditBtn,
  LocationSearchDiv,
  LocationSearchWrapper,
  LocationForm,
  LocationSearchBtn,
  LocationInput,
  LocationResult,
  LocationPinnedPlace,
  LocationPinnedName,
  LocationPinnedTemp,
  LocationPinnedWord,
  LocationSearchPlace,
  LocationSearchPlaceName,
  LocationSearchPlaceIcon,
  LocationSearchPlaceTemp,
};
