import Router from '@Routes/Router';
import DefaultTheme from '@Styles/DefaultTheme';
import GlobalStyle from '@Styles/GlobalStyle';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <Router />
    <ReactQueryDevtools initialIsOpen={false} />
  </ThemeProvider>
);

export default App;
