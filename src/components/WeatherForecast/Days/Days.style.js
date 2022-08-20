import styled, { css } from 'styled-components';

const InfList = styled.ul`
  text-align: center;
  margin: 2.7rem 0 2.2rem;
  font-size: 1.6rem;
`;

const InfListItem = styled.li`
  ${(props) =>
    props.temp &&
    css`
      font-size: 9rem;
      letter-spacing: -0.4rem;
      text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.14);
      margin: 1.1rem 0;
    `}

  ${(props) =>
    props.diff &&
    css`
      font-size: 1.4rem;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.24);
    `}
  
    ${(props) =>
    props.minmax &&
    css`
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: 1.6rem 0 2.2rem;
    `}

  span {
    font-size: 4.4rem;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
`;

const Item = styled.li`
  ${(props) => (props.divider ? 'opacity: 0.2;' : null)}
  ${(props) => (props.sign ? 'font-size: 4.4rem;' : null)}
}
`;

const CommentWrapper = styled.div`
  margin: 0 auto;
  width: 27rem;
  height: 16rem;
  border-radius: 3rem;
  text-align: center;
  background: rgba(115, 194, 239, 0.3);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

const Comment = styled.ul`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 3.6rem;
  padding: 2.7rem 2.5rem 1.7rem;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.24);
`;

const Caption = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
`;

const Timeline = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  overflow-x: scroll;
  overflow-y: hidden;
  text-align: center;
  margin: 7.4rem 0 3.6rem 2.4rem;
  padding: 0 2.4rem 1.7rem 0;

  &::-webkit-scrollbar {
    height: 0.6rem;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem;
  }
`;

const ItemList = styled.ul`
  line-height: 1.8rem;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  & > li:first-child {
    letter-spacing: 0.5px;
    opacity: 0.8;
  }

  & > li:last-child {
    font-size: 1.6rem;
  }

  & > li > img {
    width: 5rem;
    height: 5rem;
  }
`;

export { Caption, Comment, CommentWrapper, InfList, InfListItem, Item, ItemList, Timeline, Wrapper };
