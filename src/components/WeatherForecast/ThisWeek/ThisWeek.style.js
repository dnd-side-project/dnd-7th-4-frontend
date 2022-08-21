import styled from 'styled-components';
// import sunnyGround from '@Assets/image/sunny-ground.svg';

const CommentDiv = styled.div`
  width: 30rem;
  border-radius: 3rem;
  background: rgba(115, 194, 239, 0.3);
  margin: 3.8rem auto 0;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

const CommentTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 2.3rem 1.1rem;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.24);
`;

const WeekList = styled.ul`
  font-size: 1.4rem;
  width: 31rem;
  background: rgba(0, 0, 0, 0.11);
  border-radius: 2.4rem;
  margin: 2.9rem auto;
  padding: 1.2rem 0 1rem 0;

  & > li:not(:first-child) {
    padding: 1rem 1.6rem 1rem 1.4rem;
  }

  & > li:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  & > li:first-child {
    border-bottom: 0;
  }
`;

const StandardList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 8rem;
  gap: 5.5rem;
  ${({ theme }) => theme.fonts.cap};
  opacity: 0.5;
`;

const DayList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  font-size: 1.6rem;

  li > img {
    width: 2.4rem;
  }

  & > li:last-child {
    flex: 1;
  }
`;

const DateList = styled.ul`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const DateItem = styled.li`
  ${(props) => (props.size ? 'font-size: 1.2rem; margin-top: 0.4rem; font-weight: 500;' : 'font-size: 1.4rem')};
`;

const Percent = styled.span`
  ${({ theme }) => theme.fonts.cap};
  margin-left: 0.4rem;
`;

const TempList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.2rem;

  & > li:nth-child(2) {
    opacity: 0.4;
  }
`;

export { CommentDiv, CommentTitle, DateItem, DateList, DayList, Percent, StandardList, TempList, WeekList };
