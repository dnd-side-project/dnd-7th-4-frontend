import Router from '@Routes/Router';
import GlobalStyle from '@Styles/GlobalStyle';
import DefaultTheme from '@Styles/DefaultTheme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </>
  );
}

export default App;
