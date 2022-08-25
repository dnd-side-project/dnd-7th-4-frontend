import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  height: 18rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2.4rem;
  margin-bottom: 0.7rem;
  color: white;
`;
const Comments = styled.ul`
  width: 11.8rem;
  height: 6.9rem;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 130%;
  margin: 1.6rem;
`;
const Comment = styled.li``;
const Infos = styled.div`
  display: flex;
  align-items: center;
  width: 11.8rem;
  height: 4.6rem;
  margin-top: 2.2rem;
  margin-bottom: 1.6rem;
`;

const Info = styled.ul`
  width: 4.9rem;
  display: flex;
  flex-direction: column;
  margin-right: 2.3rem;
`;

const Img = styled.img`
  width: 4.6rem;
  height: 4.6rem;
`;

const InfoTitle = styled.li`
  width: 4.9rem;
  height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.li`
  width: 5.5rem;
  margin-right: 0.3rem;
  font-size: 1.4rem;
  font-weight: 500;
  opacity: 0.6;
`;
const InfoUnit = styled.li`
  font-size: 1.2rem;
`;

export { Comment, Comments, Img, Info, Infos, InfoText, InfoTitle, InfoUnit, Wrapper };
