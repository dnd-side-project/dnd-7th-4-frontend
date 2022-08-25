import backgroundImg from '@Assets/images/backgroundImg.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${backgroundImg}) 0% 0% / cover;
  overflow: hidden;
  @media ${({ theme }) => theme.size.small} {
    background: none;
  }
`;
const Mobile = styled.div`
  position: absolute;
  top: 0;
  right: 30rem;
  @media (max-width: 1360px) {
    left: 70rem;
  }
  @media ${({ theme }) => theme.size.small} {
    left: 0;
  }
`;

export { Mobile, Wrapper };
