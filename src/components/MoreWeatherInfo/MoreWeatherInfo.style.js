import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  width: 31.1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.1rem;
  margin: 0 auto;
  padding-bottom: 1.6rem;
`;

const Section = styled.section`
  background: ${({ skyState, theme }) =>
    Object.keys(theme.groundColors).includes(skyState) ? theme.groundColors[skyState] : null};
`;

export { Section, Wrapper };
