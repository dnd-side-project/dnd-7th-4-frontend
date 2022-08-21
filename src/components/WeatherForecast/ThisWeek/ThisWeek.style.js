import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4.8rem;
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
  }
`;

const StandardList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 0 2.1rem 8rem;
  gap: 5.3rem;
  ${({ theme }) => theme.fonts.subtit1};
`;

const DayList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  font-size: 1.6rem;

  li > img {
    width: 3.3rem;
    height: 3.3rem;
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

export { DateItem, DateList, DayList, Percent, Section, StandardList, TempList, WeekList };
