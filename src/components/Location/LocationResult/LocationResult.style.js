import DeleteIcon from '@Assets/icon/delete.svg';
import styled from 'styled-components';

const LocationModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 36rem;
  height: 78rem;
  display: ${({ modal }) => (modal ? `show` : `none`)};
  background: ${({ modal }) => (modal ? `rgba(0, 0, 0, 0.25); z-index:1;` : null)};
`;
const LocationResult = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 18.9rem;
  width: 36rem;
  ${({ modal }) => (modal ? `opacity: 0.2` : null)};
`;
const LocationPinnedPlace = styled.div`
  position: relative;
  width: 31.2rem;
  height: 9rem;
  margin: 0 auto;
  margin-bottom: 1.8rem;
  border-radius: 2rem;
  background: linear-gradient(180deg, #f2bb4f 73.39%, #f7c440 83.01%, #edd087 93.58%);
  box-shadow: 0rem 0rem 0.7rem rgba(0, 0, 0, 0.2);
  ${({ value }) => (value ? `display: hidden` : null)};
`;
const LocationPinnedName = styled.h1`
  display: flex;
  position: relative;
  text-align: center;
  justify-content: end;
  top: 5.8rem;
  margin-right: 1.6rem;
  width: 12rem;
  height: 1.6rem;
  color: #ffffff;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 100%;
  text-align: right;
  letter-spacing: 0.015rem;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
  left: ${({ showDeleteIcon }) => (showDeleteIcon ? `9.2rem;` : `16.8rem`)};
`;
const LocationPinnedTemp = styled.h1`
  display: flex;
  position: relative;
  left: 1.2rem;
  width: 7.3rem;
  height: 6.3rem;
  color: #ffffff;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 5.8rem;
  line-height: 100%;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
  ::after {
    content: '°';
  }
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
const LocationDeleteIcon = styled.button`
  display: flex;
  position: absolute;
  width: 8.6rem;
  height: 9rem;
  left: 22.6rem;
  top: 0rem;
  border: none;
  border-radius: 0 2rem 2rem 0;
  background: #eb4c4c;
  background-image: url(${DeleteIcon});
  background-repeat: no-repeat;
  background-position: center;
  display: ${({ modal }) => (modal ? `none` : `show`)};
`;
const LocationModal = styled.div`
  position: absolute;
  top: 26rem;
  left: 6.6rem;
  width: 22.9rem;
  height: 13.7rem;
  border-radius: 1.5rem;
  background: #ffffff;
`;
const LocationModalQuestion = styled.h1`
  position: absolute;
  top: 2.5rem;
  left: 5rem;
  width: 13.5rem;
  height: 4.8rem;
  color: #000000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.03rem;
`;
const LocationModalCancel = styled.button`
  position: absolute;
  text-align: center;
  top: 9.3rem;
  left: 3.5rem;
  width: 5rem;
  height: 2.1rem;
  color: #000000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: 0.015rem;
  border: none;
  background: inherit;
  opacity: 0.4;
`;
const LocationModalDelete = styled.button`
  position: absolute;
  top: 9.3rem;
  left: 14.5rem;
  width: 5rem;
  height: 2.1rem;
  color: #ef1d00;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.015rem;
  border: none;
  background: inherit;
`;
export {
  LocationDeleteIcon,
  LocationModal,
  LocationModalCancel,
  LocationModalDelete,
  LocationModalQuestion,
  LocationModalWrapper,
  LocationPinnedName,
  LocationPinnedPlace,
  LocationPinnedTemp,
  LocationResult,
  LocationSearchPlace,
  LocationSearchPlaceIcon,
  LocationSearchPlaceName,
  LocationSearchPlaceTemp,
};
