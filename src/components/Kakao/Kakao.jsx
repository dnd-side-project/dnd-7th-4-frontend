const Kakao = () => {
  let params = new URL(document.location).searchParams; // 현재 url 의 파라미터
  /* eslint-disable no-unused-vars */
  let code = params.get('code'); // params 에 저장된 파라미터 중 'code' 의 값

  return <div></div>;
};

export default Kakao;
