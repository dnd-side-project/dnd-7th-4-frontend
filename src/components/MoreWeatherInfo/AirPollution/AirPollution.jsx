import * as S from './AirPollution.style';

function AirPollution() {
  return (
    <S.Wrapper>
      <S.Title>미세먼지</S.Title>
      <S.Texts>
        <S.Text>자연환기는</S.Text>
        <S.Text>자제해주세요!</S.Text>
      </S.Texts>
      <S.Infos>
        <S.Info>
          <S.Img></S.Img>
          <S.ImgTitle>좋음</S.ImgTitle>
          <S.ImgText>미세먼지</S.ImgText>
        </S.Info>
        <S.Info>
          <S.Img></S.Img>
          <S.ImgTitle>나쁨</S.ImgTitle>
          <S.ImgText>초미세먼지</S.ImgText>
        </S.Info>
      </S.Infos>
    </S.Wrapper>
  );
}

export default AirPollution;
