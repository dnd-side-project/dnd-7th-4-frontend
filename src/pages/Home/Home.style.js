import styled from 'styled-components';

export const Container = styled.div`
  width: 36rem;
  color: #fff;
  position: relative;
  background: ${({ skyState, theme }) =>
      Object.keys(theme.weatherImg).includes(skyState) ? theme.weatherImg[skyState] : null},
    ${({ skyState, theme }) => (Object.keys(theme.skyColors).includes(skyState) ? theme.skyColors[skyState] : null)};
`;
