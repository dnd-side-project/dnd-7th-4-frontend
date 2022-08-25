import styled, { css, keyframes } from 'styled-components';

const Up = (skyState, theme) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${theme.groundHeights[skyState]};
`;

const TodayAnimation = styled.div`
  position: absolute;
  bottom: -40px;
  background: ${({ skyState, theme }) => (theme.groundGradients[skyState] ? theme.groundGradients[skyState] : null)};
  width: 100%;
  animation ${({ skyState, theme }) => Up(skyState, theme)} 1s ease-in-out forwards;
`;

const TomorrowAnimation = styled.div`
  position: absolute;
  bottom: -40px;
  background: ${({ skyState, theme }) => (theme.groundGradients[skyState] ? theme.groundGradients[skyState] : null)};
  width: 100%;
  animation ${({ skyState, theme }) => Up(skyState, theme)} 1s ease-in-out forwards;
`;

const Section = styled.section`
  position: relative;
`;

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
`;

const CommentWrapper = styled.div`
  margin: 0 auto;
  width: 27rem;
  height: 16rem;
  border-radius: 3rem;
  text-align: center;
  background: ${({ skyState, theme }) => (theme.commentOpacities[skyState] ? theme.commentOpacities[skyState] : null)};
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  @media ${({ theme }) => theme.size.small} {
    width: calc(100vw - 9rem);
  }
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
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  overflow-x: scroll;
  overflow-y: hidden;
  text-align: center;
  margin: 6.3rem 0 4rem 2.4rem;
  padding: 0 2.4rem 1.8rem 0;

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

  & > li:nth-child(2) {
    width: 5rem;
    height: 5rem;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 2.5rem;
    position: relative;
    margin: 0.5rem 0 0.7rem 0;
  }

  & > li:nth-child(2) > img {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > li:last-child {
    font-size: 1.6rem;
  }
`;

export {
  Caption,
  Comment,
  CommentWrapper,
  InfList,
  InfListItem,
  Item,
  ItemList,
  Section,
  Timeline,
  TodayAnimation,
  TomorrowAnimation,
  Wrapper,
};
