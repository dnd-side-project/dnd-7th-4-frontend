import { skyWithSelect, weatherWithUpdateTime } from '@Recoil/weather';
import { useRecoilValue } from 'recoil';

import * as S from './UpdateTime.style';

const UpdateTime = () => {
  const skyState = useRecoilValue(skyWithSelect);
  const updateTimeState = useRecoilValue(weatherWithUpdateTime);
  return (
    <S.Section skyState={skyState}>
      <S.Wrapper>{`이 정보는 ${updateTimeState}에 업데이트 되었습니다.`}</S.Wrapper>
    </S.Section>
  );
};

export default UpdateTime;
