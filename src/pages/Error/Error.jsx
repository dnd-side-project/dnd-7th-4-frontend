import errorCloud from '@Assets/icon/error-cloud.svg';
import error404 from '@Assets/icon/error404.svg';
import leftArrow from '@Assets/icon/left-arrow.svg';
import errorAtom from '@Recoil/error';
import { skyWithSelect } from '@Recoil/weather';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './Error.style';

const Error = () => {
  const skyState = useRecoilValue(skyWithSelect);
  const error = useRecoilValue(errorAtom);
  const [content, setContent] = useState({ img: '', alt: '', title: '', text: '', button: '' });

  useEffect(() => {
    if (error === 'api') {
      setContent(() => ({
        img: errorCloud,
        alt: '에러 구름 아이콘',
        title: '일시적인 오류입니다',
        text: '잠시 후에 다시 시도해주세요',
        button: '재시도',
      }));
    } else if (error === '404') {
      setContent(() => ({
        img: error404,
        alt: '잘못된 페이지 아이콘',
        title: '요청하신 페이지를/찾을 수 없습니다',
        text: '접속하신 URL을 다시 확인해주세요',
        button: '홈으로 돌아가기',
      }));
    }
  }, [error]);

  return (
    <S.Container skyState={skyState} error={error}>
      <header>
        <Link to="/">
          <img src={leftArrow} alt="나가기 아이콘" />
        </Link>
      </header>
      <main>
        <S.Wrapper>
          <S.Icon src={content.img} alt={content.alt} error={error} />
          <S.Title>
            <p>{content.title.split('/')[0]}</p>
            <p>{content.title.split('/')[1]}</p>
          </S.Title>
          <S.Texts error={error}>{content.text}</S.Texts>
          <S.Button>
            <Link to="/">{content.button}</Link>
          </S.Button>
        </S.Wrapper>
      </main>
    </S.Container>
  );
};

export default Error;
