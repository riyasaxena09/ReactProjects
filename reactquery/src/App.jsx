
import './App.css'
import Card from './Card'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './table';
import Button from './button';
import CreateContext from './ContextProvier/context';

const queryClient = new QueryClient();
function App() {
  return (
  <CreateContext>
    <QueryClientProvider client={queryClient}>
      <Card/>
      <Table/>
      <Button/>
   </QueryClientProvider>
  </CreateContext>
  )
}

export default App
