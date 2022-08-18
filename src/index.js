import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log('Error: ', error);
      console.log('Query: ', query);
    },
  }),
});

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
