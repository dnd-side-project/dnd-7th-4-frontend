import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 31.2rem;
  height: 60rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.1rem;
`;

const Section = styled.section`
  background: ${({ skyState, theme }) =>
    Object.keys(theme.groundColors).includes(skyState) ? theme.groundColors[skyState] : null};
`;

export { Section, Wrapper };
