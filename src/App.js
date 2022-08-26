import '@Styles/font.css';

import Router from '@Routes/Router';
import DefaultTheme from '@Styles/DefaultTheme';
import GlobalStyle from '@Styles/GlobalStyle';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <Helmet>
      <script src="https://developers.kakao.com/sdk/js/kakao.js" />
    </Helmet>
    <Router />
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </ThemeProvider>
);

export default App;
