import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import UserForm from './components/UserForm';
import store from './store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserForm />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
