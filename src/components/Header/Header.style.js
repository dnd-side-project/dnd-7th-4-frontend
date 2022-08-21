import styled, { css } from 'styled-components';

const Header = styled.header`
  padding: 1.9rem 2.2rem 3.8rem 2.4rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13rem;

  ${(props) =>
    props.sub &&
    css`
      gap: 1rem;
    `}
`;

const Title = styled.li`
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const Item = styled.li`
  filter: ${(props) => (props.noshadow ? null : `drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));`)};
`;

const Img = styled.img`
  width: ${(props) => (props.kakao ? '2.2rem' : '2.4rem')};
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
  }
`;

export { Button, Header, Img, Item, List, Title };
