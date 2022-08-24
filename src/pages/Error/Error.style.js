import sunnySubtractBack from '@Assets/images/sunnySubtractBack.svg';
import sunnySubtractFront from '@Assets/images/sunnySubtractFront.svg';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 36rem;
  height: 69rem;
  padding: 0 2rem;
  background: url(${sunnySubtractFront}) no-repeat -3rem 58rem, url(${sunnySubtractBack}) no-repeat 10rem 58rem,
    ${({ theme }) => theme.skyColors.맑음};
  header {
    position: relative;
    text-align: left;
    padding-top: 2.2rem;
    margin-bottom: ${(props) => props.error === 'api' && '16rem'};
    margin-bottom: ${(props) => props.error === '404' && '12.1rem'};
  }
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5rem;
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
  color: white;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 1rem;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.24);
  z-index: 999;
`;
const Texts = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4.2rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin-bottom: ${(props) => props.error === 'api' && '6.7rem'};
  margin-bottom: ${(props) => props.error === '404' && '5.4rem'};
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  z-index: 999;
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
