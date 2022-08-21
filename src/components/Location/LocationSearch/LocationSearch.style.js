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
  ${({ edit }) => (edit ? `background: red` : null)};
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
    color: black;
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

export {
  LocationEditBtn,
  LocationForm,
  LocationHeader,
  LocationInput,
  LocationSearchBtn,
  LocationSearchDiv,
  LocationSearchWrapper,
  LocationTitle,
};
