import cloudy from '@Assets/images/cloudy.svg';
import cloudySubtractBack from '@Assets/images/cloudySubtractBack.svg';
import cloudySubtractFront from '@Assets/images/cloudySubtractFront.svg';
import heavyRain from '@Assets/images/heavyRain.svg';
import rainy from '@Assets/images/rainy.svg';
import sunny from '@Assets/images/sunny.svg';
import sunnySubtractBack from '@Assets/images/sunnySubtractBack.svg';
import sunnySubtractFront from '@Assets/images/sunnySubtractFront.svg';
import veryCloudy from '@Assets/images/veryCloudy.svg';
import wet from '@Assets/images/wet.svg';

const colors = {
  error: 'EF1D00',
  affirm: '#0078E7',
  divider: '#E8E8E8',
};

const fonts = {
  home: 'font-size: 9rem; font-weight: 400; letter-spacing: -0.4rem;',
  h1: 'font-size: 3.2rem; font-weight: 300',
  h2: 'font-size: 2.4rem; font-weight: 600',
  h3: 'font-size: 1.8rem; font-weight: 700',
  subtit1: 'font-size: 1.6rem; font-weight: 500',
  subtit2: 'font-size: 1.4rem; font-weight: 600',
  text1: 'font-size: 1.6rem; font-weight: 400',
  text2: 'font-size: 1.4rem; font-weight: 400',
  btn: 'font-size: 1.6rem; font-weight: 600',
  cap: 'font-size: 1.2rem; font-weight: 500',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const skyColors = {
  맑음: 'linear-gradient(180deg, #68BEEF 2.25%, #9BD6F8 27.1%)',
  구름많음: 'linear-gradient(180deg, #6A8C9F 2.25%, #9ABFD3 27.1%)',
  흐림: 'linear-gradient(180deg, #45687C 9.68%, #91B7CC 31.39%)',
  약한비: 'linear-gradient(180deg, #7BA3BF 0%, #88A7B7 25.52%, #7EB8C0 100%)',
  중간비: 'linear-gradient(180deg, #6A8BA2 0%, #5A849A 25.52%, #3F7B88 100%)',
  강한비: 'linear-gradient(180deg, #4A607C 0%, #5C7380 18.75%, #597A81 100%)',
  이번주: 'linear-gradient(180deg, #68BEEF 2.25%, #9BD6F8 27.1%)',
};

const groundColors = {
  맑음: 'rgba(112, 188, 143, 1)',
  구름많음: 'rgba(130, 177, 149, 1)',
  흐림: 'rgba(130, 177, 149, 1)',
  약한비: 'linear-gradient(180deg, #7698B0 0%, #5B839F 10.07%)',
  중간비: 'linear-gradient(180deg, #496E89 0%, #3C627D 10.07%)',
  강한비: 'linear-gradient(180deg, #4F6373 0%, #3E5568 25.1%)',
  이번주: 'rgba(112, 188, 143, 1)',
};

const weatherImg = {
  맑음: `url(${sunny}) no-repeat -3.4rem -32rem, url(${sunnySubtractFront}) no-repeat -3rem 48rem, url(${sunnySubtractBack}) no-repeat 10rem 48rem`,
  구름많음: `url(${cloudy}) no-repeat 2.6rem 3.2rem, url(${cloudySubtractFront}) no-repeat -3rem 48rem, url(${cloudySubtractBack}) no-repeat 10rem 48rem`,
  흐림: `url(${veryCloudy}) no-repeat  -16.3rem -13rem, url(${cloudySubtractFront}) no-repeat -3rem 48rem, url(${cloudySubtractBack}) no-repeat 10rem 48rem`,
  약한비: `url(${wet}) no-repeat -10rem -20rem`,
  중간비: `url(${rainy}) no-repeat -10rem -20rem`,
  강한비: `url(${heavyRain}) no-repeat -10rem -20rem`,
  이번주: `url(${sunnySubtractFront}) no-repeat -3rem 48rem, url(${sunnySubtractBack}) no-repeat 10rem 48rem`,
};

const commentOpacity = {
  맑음: 'rgba(115, 194, 239, 0.3)',
  구름많음: 'rgba(124, 173, 201, 0.3)',
  흐림: 'rgba(115, 149, 168, 0.3)',
  약한비: 'rgba(104, 142, 164, 0.3)',
  중간비: 'rgba(61, 100, 128, 0.3)',
  강한비: 'rgba(66, 87, 108, 0.3)',
};

const DefaultTheme = {
  colors,
  fonts,
  fontWeights,
  skyColors,
  groundColors,
  weatherImg,
  commentOpacity,
};

export default DefaultTheme;
