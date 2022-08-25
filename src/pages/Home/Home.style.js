import styled from 'styled-components';

export const Container = styled.div`
  width: 36rem;
  height: 100vh;
  color: #fff;
  position: relative;
  background: ${({ skyState, theme }) => (theme.weatherImgs[skyState] ? theme.weatherImgs[skyState] : null)},
    ${({ skyState, theme }) => (theme.skyColors[skyState] ? theme.skyColors[skyState] : null)};
  overflow-y: scroll;
  @media ${({ theme }) => theme.size.small} {
    width: 100vw;
    min-width: 36rem;
    /* overflow-y: visible; */
  }
`;
