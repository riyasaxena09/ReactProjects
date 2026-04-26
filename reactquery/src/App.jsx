
import './App.css'
import Card from './Card'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './table';
import Button from './button';
import CreateContext from './ContextProvier/context';
import { store } from './store/store';
import { Provider } from "react-redux";
import Products from './Products';
const queryClient = new QueryClient();

function App() {
  return (
  <Provider store={store}>
  <CreateContext>
    <QueryClientProvider client={queryClient}>
      <Card/>
      <Table/>
      <Button/>
      <Products/>
   </QueryClientProvider>
  </CreateContext>
  </Provider>
  )
}

export default App
