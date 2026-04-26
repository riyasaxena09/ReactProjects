
import './App.css'
import Card from './Card'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './table';
import Button from './button';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Card/>
      <Table/>
      <Button/>
   </QueryClientProvider>
  )
}

export default App
