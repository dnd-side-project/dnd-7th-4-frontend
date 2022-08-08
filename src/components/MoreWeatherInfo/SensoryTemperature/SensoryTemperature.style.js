import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  height: 19.2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1.2rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  color: white;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.8rem;
  opacity: 0.6;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 130%;
  letter-spacing: 0.015rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 4.2rem;
`;

const Text = styled.span``;

const Info = styled.div`
  font-size: 2.1rem;
  font-weight: 500;
  opacity: 0.6;
  margin-top: 3.2rem;
`;

export { Wrapper, Title, Texts, Text, Info };
