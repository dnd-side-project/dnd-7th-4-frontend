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
  margin-top: 1.8rem;
`;

const Text = styled.span``;
const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9.5rem;
  margin-top: 0.9rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  background-color: grey;
  margin-bottom: 0.7rem;
`;

const ImgTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ImgText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export { Wrapper, Title, Texts, Text, Infos, Info, Img, ImgTitle, ImgText };
