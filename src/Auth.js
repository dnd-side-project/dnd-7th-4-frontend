const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  return <div>{code}</div>;
};
export default Auth;
