import speechBubble from '@Assets/icon/speech-bubble.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 36rem;
  height: 78rem;
  padding: 0 2rem;
  background-color: #fafafa;
  header {
    text-align: left;
    padding-top: 2.2rem;
    margin-bottom: 7.4rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5rem;
  img {
    margin-bottom: 4.4rem;
  }
`;
const Icons = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  width: 25.6rem;
  height: 8.7rem;
  background: no-repeat url(${speechBubble});
  padding-top: 1.7rem;
  margin-bottom: 2.4rem;
`;
const Icon = styled.li`
  margin-left: 3.6rem;
  img {
    width: 4.2rem;
    height: 4.2rem;
    :first-child {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
  :last-child {
    margin-right: 2.8rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin-bottom: 1.4rem;
`;
const Texts = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4.2rem;
  line-height: 2.1rem;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.15px;
  margin-bottom: 2.6rem;
  color: #7d7d7d;
`;
const Button = styled.button`
  display: flex;
  width: 11.6rem;
  height: 5.5rem;
  background: ${(props) => (props.alarm ? '#68bfef' : '#A4A4A4')};
  box-shadow: inset 0px 2.23077px 2.23077px rgba(0, 0, 0, 0.25);
  border-radius: 2.7rem;
  border: none;
  cursor: pointer;
  transition: background 1s ease-in-out;
`;
const ButtonText = styled.p`
  width: 2.4rem;
  height: 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.15px;
  margin: 1.6rem 0;
  margin-left: 2.3rem;
  margin-right: 1.7rem;
  transform: ${(props) => (props.alarm ? '' : 'translateX(3.5rem)')};
  color: white;
`;
const ButtonCircle = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  background: #f0f0f0;
  box-shadow: inset 0px 2.23077px 2.23077px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  margin: 0.5rem 0;
  padding-right: ${(props) => (props.alarm ? '0.8rem' : '0')};
  transform: ${(props) => (props.alarm ? '' : 'translateX(-6.5rem)')};
  transition: transform 0.5s ease-in-out;
`;

export { Button, ButtonCircle, ButtonText, Container, Icon, Icons, Texts, Title, Wrapper };
