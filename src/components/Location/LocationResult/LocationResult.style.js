import styled from 'styled-components';

const LocationResult = styled.main`
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
  ${({ value }) => (value ? `display: hidden` : null)};
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
  LocationPinnedName,
  LocationPinnedPlace,
  LocationPinnedTemp,
  LocationPinnedWord,
  LocationResult,
  LocationSearchPlace,
  LocationSearchPlaceIcon,
  LocationSearchPlaceName,
  LocationSearchPlaceTemp,
};
