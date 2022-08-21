import styled from 'styled-components';

const TabList = styled.ul`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const Tab = styled.button`
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  border: none;
  background: #fff;
  color: #929292;
  padding: 0.6rem 0.8rem;
  border-radius: 3rem;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &.on {
    background: #1f1f1f;
    color: #fff;
  }
`;

export { Tab, TabList };
