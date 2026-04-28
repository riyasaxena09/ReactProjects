
import './App.css'
import Card from './Card'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './table';
import Button from './button';
import CreateContext from './ContextProvier/context';
import { store } from './store/store';
import { Provider } from "react-redux";
import Products from './Products';
import Enhanceduser from './higherOrderComponent/EnhancedUser';
import Debounce from './debonce/debonce';
import Trottle from './throttle/throtle';
const queryClient = new QueryClient();

function App() {
  return (
  <Provider store={store}>
  <CreateContext>
    <QueryClientProvider client={queryClient}>
      <Trottle/>
      <Debounce/>
      <Enhanceduser/>
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
