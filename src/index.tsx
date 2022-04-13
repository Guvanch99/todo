import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter } from 'react-router-dom'
import TodosState from "./context/Todos-state";
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
 const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5000
    }
  }
})

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <TodosState>
      <App />
    </TodosState>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
