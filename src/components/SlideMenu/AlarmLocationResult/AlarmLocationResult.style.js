import styled from 'styled-components';

const List = styled.ul`
  margin-top: 2.7rem;
  padding: 0 2.4rem;
  line-height: 2.4rem;
  overflow-y: scroll;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background: rgba(138, 136, 136, 0.19);
    border-radius: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(80, 80, 80, 0.11);
    border-radius: 0.3rem;
  }

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

  &:focus {
    color: #03a9f4;
  }
`;

export { Button, List };
