import styled from 'styled-components';

const Footer = styled.footer`
  background: ${({ skyState, theme }) => (theme.groundColors[skyState] ? theme.groundColors[skyState] : null)};
`;

const Wrapper = styled.div`
  width: 31.1rem;
  padding-top: 0.7rem;
  padding-bottom: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0 auto;
`;

const Infos = styled.ul`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);

  b {
    color: white;
  }
`;

const Title = styled.li``;
const Info = styled.li``;

export { Footer, Info, Infos, Title, Wrapper };
