import styled from 'styled-components';

const Container = styled.div`
  width: 36rem;
  padding: 0 2rem;

  header {
    text-align: right;
    margin-top: 5.2rem;
    margin-bottom: 12rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5rem;
  height: 35.5rem;

  img {
    margin-bottom: 2.2rem;
  }
`;
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin-bottom: 2.2rem;
`;
const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin-bottom: 6.4rem;
  color: #7d7d7d;
`;
const Button = styled.button`
  width: 23rem;
  height: 5.5rem;
  border-radius: 1rem;
  background-color: #5d9eff;
  border: none;
  color: white;
`;

export { Container, Wrapper, Title, Text, Button };
