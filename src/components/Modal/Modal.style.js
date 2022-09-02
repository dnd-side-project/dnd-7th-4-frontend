import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 38, 41, 0.5);
`;

const Modal = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22.9rem;
  height: 13.7rem;
  border-radius: 1.5rem;
  background: #fff;

  & > p {
    font-size: 1.6rem;
    text-align: center;
    line-height: 11rem;
  }
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  color: #03a9f4;
  cursor: pointer;
  position: absolute;
  top: 9.3rem;
  left: 16.4rem;
`;

export { Background, Button, Modal };
