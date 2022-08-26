import DeleteIcon from '@Assets/icon/delete.svg';
import styled from 'styled-components';

const LocationModalWrapper = styled.div`
  display: ${({ modal }) => (modal ? `show` : `none`)};
  position: fixed;
  width: 36rem;
  height: 78rem;
  background: ${({ modal }) => (modal ? `rgba(0, 0, 0, 0.25); z-index:1;` : null)};
`;
const LocationResult = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 18.9rem;
  width: 36rem;
  opacity: ${({ modal }) => (modal ? `opacity: 0.2` : null)};
`;
const LocationPinnedPlace = styled.div`
  display: ${({ value }) => (value ? `hidden` : null)};
  position: relative;
  width: 31.2rem;
  height: 9.3rem;
  margin: 0 auto;
  top: 10.8rem;
  margin-bottom: 1.8rem;
  border-radius: 2rem;
  box-shadow: 0.15rem 0.1rem 0rem rgba(0, 0, 0, 0.15);
  background: url(${({ src }) => `${src}`});
  ${({ edit }) => (edit ? `cursor: null; pointer-events: none;` : `cursor: pointer;`)}
`;
const LocationPinnedNowPlace = styled.div`
  display: ${({ value }) => (value ? `hidden` : null)};
  position: absolute;
  left: 2.4rem;
  width: 31.2rem;
  height: 9.3rem;
  margin: 0 auto;
  margin-bottom: 1.8rem;
  border-radius: 2rem;
  box-shadow: 0.15rem 0.1rem 0rem rgba(0, 0, 0, 0.15);
  background: url(${({ src }) => `${src}`});
  ${({ edit }) => (edit ? `cursor: null; pointer-events: none;` : `cursor: pointer;`)}
`;
const LocationNowRegion = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 19.9rem;
  width: 10rem;
  height: 2.6rem;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 100%;
  text-align: right;
  letter-spacing: 0.0229412rem;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
`;
const LocationPinnedName = styled.h1`
  display: flex;
  text-align: center;
  justify-content: end;
  position: relative;
  top: 5.8rem;
  left: 15rem;
  width: 15rem;
  height: 1.6rem;
  margin-right: 1.6rem;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: right;
  letter-spacing: 0.015rem;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
`;
const LocationPinnedTemp = styled.h1`
  display: flex;
  position: relative;
  top: 0rem;
  left: 1.7rem;
  width: 7.3rem;
  height: 6.3rem;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 5.8rem;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
  ::after {
    content: '°';
  }
`;
const LocationSearchPlace = styled.div`
  position: relative;
  top: 1.4rem;
  left: 2.4rem;
  width: 30.9rem;
  height: 2.4rem;
  margin-bottom: 1.7rem;
  cursor: pointer;
`;
const LocationSearchPlaceName = styled.h1`
  display: flex;
  align-items: center;
  position: absolute;
  width: 20rem;
  height: 1.6rem;
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
  letter-spacing: 0.015rem;
`;
const LocationSearchPlaceIcon = styled.img`
  display: flex;
  align-items: center;
  position: absolute;
  left: 24rem;
  width: 2.4rem;
  height: 1.6rem;
  cursor: ${({ edit }) => (edit ? `pointer` : null)};
`;
const LocationSearchPlaceTemp = styled.h1`
  display: flex;
  align-items: center;
  position: absolute;
  left: 28.3rem;
  width: 2.7rem;
  height: 1.6rem;
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
  top: 1.9rem;
  left: 27rem;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 100%;
  background: #ef1d00 url(${DeleteIcon}) no-repeat center;
  z-index: 0.8;
  cursor: pointer;
  pointer-events: ${({ edit }) => (edit ? `auto` : `none`)};
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
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: 0.015rem;
  border: none;
  background: inherit;
  opacity: 0.4;
  ${({ alert }) => (alert ? `left: 15.4rem; color: blue;` : null)};
`;
const LocationModalDelete = styled.button`
  position: absolute;
  top: 9.3rem;
  left: 14.5rem;
  width: 5rem;
  height: 2.1rem;
  color: #ef1d00;
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
  LocationNowRegion,
  LocationPinnedName,
  LocationPinnedNowPlace,
  LocationPinnedPlace,
  LocationPinnedTemp,
  LocationResult,
  LocationSearchPlace,
  LocationSearchPlaceIcon,
  LocationSearchPlaceName,
  LocationSearchPlaceTemp,
};
