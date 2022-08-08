import * as S from './SensoryTemperature.style';

function SensoryTemperature() {
  return (
    <S.Wrapper>
      <S.Title>체감온도</S.Title>
      <S.Texts>
        <S.Text>실제온도와</S.Text>
        <S.Text>비슷해요.</S.Text>
      </S.Texts>
      <S.Info>28°</S.Info>
    </S.Wrapper>
  );
}

export default SensoryTemperature;
