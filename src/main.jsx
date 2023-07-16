import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import Buy from "./pages/Buy";
import ErrorPage from './pages/ErrorPage';
import { Destini } from './pages/components/buyComponents/Destini.jsx';
import { CountProvider } from './CountContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Cart } from './pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Buy",
    element: <Buy />,
  },
  {
    path: "Destini",
    element: <Destini />,
  },
  {
    path: "Cart",
    element: <Cart />
  }
]);

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CountProvider>
        <RouterProvider router={router} />
      </CountProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
