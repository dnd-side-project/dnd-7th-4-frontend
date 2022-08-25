import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 100vh;
  padding: 0 2rem;
  background-color: white;
  @media ${({ theme }) => theme.size.small} {
    width: 100vw;
    min-width: 36rem;
  }
  header {
    position: relative;
    text-align: left;
    padding-top: 2.2rem;
    margin-bottom: ${(props) => props.error === 'api' && '16rem'};
    margin-bottom: ${(props) => props.error === '404' && '12.1rem'};
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 32.5rem; */
`;
const Icon = styled.img`
  margin-bottom: ${(props) => props.error === 'api' && '4rem'};
  margin-bottom: ${(props) => props.error === '404' && '3.6rem'};
  z-index: 999;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: ${(props) => props.error === 'api' && '2.4rem'};
  font-size: ${(props) => props.error === '404' && '2rem'};
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 1.6rem;
  text-align: center;
`;
const Texts = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4.2rem;
  color: #9f9f9f;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin-bottom: 4rem;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.5rem;
  height: 4.6rem;
  background-color: black;
  color: white;
  border-radius: 4.6rem;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  z-index: 999;
`;

export { Button, Container, Icon, Texts, Title, Wrapper };
