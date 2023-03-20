import * as React from 'react';
import ReactDom from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient(); // queryClient 생성

ReactDom.render(
    // App에 QueryClient 제공
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>, 
    document.querySelector('#root')
);