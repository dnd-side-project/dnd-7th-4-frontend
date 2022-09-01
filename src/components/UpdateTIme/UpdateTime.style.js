import styled from 'styled-components';

const Section = styled.section`
  background: ${({ backImg, theme }) => (theme.groundColors[backImg] ? theme.groundColors[backImg] : null)};
`;

const Wrapper = styled.section`
  width: 31.1rem;
  margin: 0 auto;
  padding-bottom: 2.4rem;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  opacity: 0.6;
`;

export { Section, Wrapper };
