import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import router from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <NextUIProvider>
          <RouterProvider router={router} />
          <Toaster />
        </NextUIProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
