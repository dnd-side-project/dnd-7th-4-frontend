import styled from 'styled-components';

export const Container = styled.div`
  width: 36rem;
  height: 100vh;
  color: #fff;
  position: relative;
  overflow-y: scroll;
  background: ${({ skyState, theme }) =>
      Object.keys(theme.weatherImg).includes(skyState) ? theme.weatherImg[skyState] : null},
    ${({ skyState, theme }) => (Object.keys(theme.skyColors).includes(skyState) ? theme.skyColors[skyState] : null)};
  @media ${({ theme }) => theme.size.small} {
    width: 100vw;
    min-width: 36rem;
    /* overflow-y: visible; */
  }
`;
