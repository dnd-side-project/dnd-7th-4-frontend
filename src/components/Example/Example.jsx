import exampleAtom, { withBrackets, withParens } from '@Recoil/example';
import { useRecoilValue } from 'recoil';

import * as S from './Example.style';

const Example = () => {
  const example = useRecoilValue(exampleAtom);
  const exampleBrackets = useRecoilValue(withBrackets);
  const exampleParens = useRecoilValue(withParens);

  return (
    <S.ExampleWrapper>
      <S.ExampleTitle>{example.value}</S.ExampleTitle>
      <S.ExampleText>{exampleBrackets}</S.ExampleText>
      <S.ExampleText>{exampleParens}</S.ExampleText>
    </S.ExampleWrapper>
  );
};

export default Example;
