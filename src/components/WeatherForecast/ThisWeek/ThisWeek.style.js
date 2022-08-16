import styled from 'styled-components';

const SummaryTitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 2.6rem 0;
`;

const CommentDiv = styled.div`
  width: 31rem;
  height: 9rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
`;

const CommentTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 2.6rem 0 0.8rem;
`;

const ThisWeekList = styled.ul`
  width: 31rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.6);
  margin: 1.4rem auto;

  & > li {
    border-bottom: 1px solid white;
    padding: 1rem;
  }

  & > li:first-child {
    padding-top: 1.6rem;
  }
`;

const ThisWeekSubList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  li > img {
    width: 2.4rem;
  }

  li:last-child {
    flex: 1;
    text-align: right;
  }
`;

export { CommentDiv, CommentTitle, SummaryTitle, ThisWeekList, ThisWeekSubList };
