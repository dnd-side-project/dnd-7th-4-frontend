import styled from 'styled-components';

const Wrapper = styled.div`
  width: 36rem;
  height: 78rem;
  background: ${({ theme }) => theme.skyColors.맑음};
  position: relative;

  & > img {
    position: absolute;
    left: 103px;
    top: 361px;

    :last-child {
      position: absolute;
      left: 121px;
      top: 679.31px;
    }
  }
`;

export { Wrapper };
