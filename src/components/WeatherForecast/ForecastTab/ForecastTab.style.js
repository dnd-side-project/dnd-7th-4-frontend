import styled from 'styled-components';

const ForecastTabList = styled.ul`
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  & > li > button {
    border: none;
    background: #d7d7d7;
    cursor: pointer;
    border-radius: 3rem;
    padding: 0.7rem;
  }

  & > li > button.on {
    background: #fff;
  }
`;

export { ForecastTabList };
