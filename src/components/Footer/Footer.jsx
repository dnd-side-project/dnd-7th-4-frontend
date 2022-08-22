import { skyWithSelect } from '@Recoil/weather';
import { useRecoilValue } from 'recoil';

import * as S from './Footer.style';

const Footer = () => {
  const skyState = useRecoilValue(skyWithSelect);

  return (
    <S.Footer skyState={skyState}>
      <S.Wrapper>
        <S.Infos>
          <S.Title>
            <b>한줄날씨 </b>| (주) 한줄날씨 대표자 이채영
          </S.Title>
          <S.Info>사업자등록번호 : 136-56-00572 | 주소 : 경기도 의정부시</S.Info>
          <S.Info>평화로202번길 15, 101동 306호(호원동, 월드한아름아파트)</S.Info>
        </S.Infos>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
