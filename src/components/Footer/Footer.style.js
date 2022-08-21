import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 31.1rem;
  padding-top: 0.7rem;
  padding-bottom: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0 auto;
  margin-top: 1.6rem;
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

export { Info, Infos, Title, Wrapper };
