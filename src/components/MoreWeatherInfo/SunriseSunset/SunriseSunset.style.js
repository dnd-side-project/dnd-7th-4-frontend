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
  @media ${({ theme }) => theme.size.small} {
    width: calc(100vw - 27rem);
    min-width: 15rem;
  }
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
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.li`
  width: 2.5rem;
  height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const InfoTexts = styled.ul`
  width: 3.7rem;
  height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 5.6rem;
  letter-spacing: 0.01rem;
  :last-child {
    letter-spacing: 0.1rem;
  }
`;

export { Comment, Comments, Info, Infos, InfoTexts, InfoTitle, Wrapper };
