import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4.8rem;
  padding-bottom: 1.6rem;
`;

const WeekList = styled.ul`
  font-size: 1.4rem;
  width: 32rem;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.11);
  border-radius: 2.4rem;
  padding: 2.4rem 0 1.7rem 0;

  & > li:not(:first-child) {
    padding: 1rem 1.6rem 1rem 1.4rem;
  }

  & > li:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  & > li:first-child {
    border-bottom: 0;
    margin-bottom: 2.1rem;
  }
`;

const StandardList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4.7rem;
  ${({ theme }) => theme.fonts.subtit2};
  margin: 0 1.5rem 0 8rem;

  & > li(:last-child) {
    flex: 1;
  }
`;

const DayList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  font-size: 1.6rem;

  li > img {
    width: 3rem;
    height: 3rem;
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

const ImgList = styled.ul`
  display: flex;
  align-items: center;
`;

const ImgItem = styled.li`
  ${({ theme }) => theme.fonts.cap};
  position: relative;
  &::after {
    content: attr(data-name);
    position: absolute;
    top: 0.9rem;
    left: 3.8rem;
  }
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

export { DateItem, DateList, DayList, ImgItem, ImgList, Section, StandardList, TempList, WeekList };
