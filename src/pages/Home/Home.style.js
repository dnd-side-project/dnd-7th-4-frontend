import styled from 'styled-components';

export const Container = styled.div`
  width: 36rem;
  height: 100vh;
  color: #fff;
  position: relative;
  background: ${({ backImg, theme }) => (theme.weatherImgs[backImg] ? theme.weatherImgs[backImg] : null)},
    ${({ backImg, theme }) => (theme.skyColors[backImg] ? theme.skyColors[backImg] : null)};
  overflow-y: scroll;
  @media ${({ theme }) => theme.size.small} {
    width: 100vw;
    min-width: 36rem;
    /* overflow-y: visible; */
  }
  overflow: ${({ slide }) => slide && 'hidden'};
`;
