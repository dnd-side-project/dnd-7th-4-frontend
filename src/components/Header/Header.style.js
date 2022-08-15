import styled, { css } from 'styled-components';

const HearderNav = styled.nav`
  padding: 49px 0 42px 0;
`;

const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13rem;

  ${(props) =>
    props.sub &&
    css`
      gap: 1rem;
    `}

  &>li {
    font-size: 1.4rem;
  }
`;

const HeaderButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
  }
`;

export { HeaderButton, HeaderList, HearderNav };
