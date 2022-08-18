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
`;

const WeekList = styled.ul`
  font-size: 1.4rem;
  width: 31rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.1);
  margin: 2.9rem auto;
  padding: 1.1rem 0 1.4rem 0;

  & > li {
    padding: 1.2rem;
  }

  & > li:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const DayList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  font-size: 1.6rem;

  li > img {
    width: 2.4rem;
  }

  & > li:last-child {
    flex: 1;
    text-align: right;
  }
`;

const DateList = styled.ul`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const DateItem = styled.li`
  font-size: ${(props) => (props.size ? '1.2rem' : '1.4rem')};
`;

export { CommentDiv, CommentTitle, DateItem, DateList, DayList, WeekList };
