
import './App.css'
import Card from './Card'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Table from './table';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Card/>
      <Table/>
   </QueryClientProvider>
  )
}

export default App
