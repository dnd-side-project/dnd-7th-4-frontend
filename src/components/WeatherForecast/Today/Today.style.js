import styled, { css } from 'styled-components';

const InfList = styled.ul`
  text-align: center;
  margin: 2.7rem 0 2.2rem;
  font-size: 1.6rem;
`;

const InfListItem = styled.li`
  ${(props) =>
    props.big &&
    css`
      font-size: 9rem;
      margin-top: 1rem;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 1.4rem;
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: 1.6rem 0 2.2rem;
    `}
`;

const CommentDiv = styled.div`
  margin: 0 auto;
  width: 26rem;
  height: 19rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3rem;
  text-align: center;
`;

const CommentTitle = styled.p`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 5.9rem 5.6rem 1.7rem;
`;

const CommentSubTitle = styled.p`
  font-size: 1.4rem;
`;

const TimelineList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  overflow-x: scroll;
  overflow-y: hidden;
  text-align: center;
  margin: 7.4rem 0 5.9rem;
`;

const TimelineSubList = styled.ul`
  line-height: 1.8rem;
  font-size: 1.1rem;
  font-weight: bold;

  li:last-child {
    font-size: 1.6rem;
  }
`;

export { CommentDiv, CommentSubTitle, CommentTitle, InfList, InfListItem, TimelineList, TimelineSubList };
