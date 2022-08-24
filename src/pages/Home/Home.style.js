import styled from 'styled-components';

export const Container = styled.div`
  width: 36rem;
  color: #fff;
  position: relative;
  background: ${({ skyState, theme }) => (theme.weatherImgs[skyState] ? theme.weatherImgs[skyState] : null)},
    ${({ skyState, theme }) => (theme.skyColors[skyState] ? theme.skyColors[skyState] : null)};
`;
