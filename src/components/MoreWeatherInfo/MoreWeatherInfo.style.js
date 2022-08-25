import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  width: 31.1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  gap: 1.1rem;
  margin: 0 auto;
  padding-bottom: 1.6rem;
  @media ${({ theme }) => theme.size.small} {
    width: calc(100vw - 5rem);
  }
  @media (max-width: 450px) {
    width: calc(100vw - 7rem);
  }
  @media (max-width: 390px) {
    width: calc(100vw - 5rem);
  }
`;

const Section = styled.section`
  @media ${({ theme }) => theme.size.small} {
    /* display: flex;
    justify-content: center; */
  }
  background: ${({ skyState, theme }) =>
    Object.keys(theme.groundColors).includes(skyState) ? theme.groundColors[skyState] : null};
`;

export { Section, Wrapper };
