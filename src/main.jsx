import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import router from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
        <Toaster />
      </NextUIProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
