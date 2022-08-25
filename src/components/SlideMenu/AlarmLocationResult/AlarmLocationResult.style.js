import styled from 'styled-components';

const List = styled.ul`
  margin-top: 2.7rem;
  padding: 0 2.4rem;
  line-height: 2.4rem;

  & > li {
    margin-bottom: 1.4rem;
  }
`;

const Button = styled.button`
  border: transparent;
  background: transparent;
  font-family: inherit;
  font-size: 1.6rem;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;

export { Button, List };
